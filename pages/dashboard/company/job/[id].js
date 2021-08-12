import { useEffect, useRef, useState } from "react"
import Nav from "../../../../components/Nav/Nav"
import userData from "../../../../components/userData/UserData"
import LoggedLayout from "../../../../components/Layouts/LoggedLayout"
import axios from "axios"
import api from "../../../../api/api"
import { useRouter } from "next/dist/client/router"
import JobForm from "../../../../dashboard/company/EditJob/JobForm"
import JobEditor from "../../../../dashboard/company/EditJob/JobEditor"

const index = ({ data }) => {
    
    const router = useRouter()
    const { id } = router.query

    const publishedRef = useRef()

    const [job, setJob] = useState(false)
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState(false)

    const [jobTitle, setJobTitle] = useState('')
    const [jobDetails, setJobDetails] = useState('')
    const [location, setLocation] = useState('')
    const [jobType, setJobType] = useState('')
    const [salary, setSalary] = useState('')
    const [expLevel, setExpLevel] = useState('')

    const [jobTitleAlert, setJobTitleAlert] = useState('')
    const [jobDetailsAlert, setJobDetailsAlert] = useState('')
    const [locationAlert, setLocationAlert] = useState('')
    const [jobTypeAlert, setJobTypeAlert] = useState('')
    const [salaryAlert, setSalaryAlert] = useState('')
    const [expLevelAlert, setExpLevelAlert] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setJobTitleAlert('')
        setLocationAlert('')
        setJobTypeAlert('')
        setSalaryAlert('')
        setExpLevelAlert('')
        setJobDetailsAlert('')

        const convertToDOM = new DOMParser().parseFromString(jobDetails, "text/html")

        if (!jobTitle) setJobTitleAlert('Please enter job title')
        else if (!location) setLocationAlert('Please enter job location')
        // else if (!salary) setSalaryAlert('Please enter job salary')
        else if (!jobType) setJobTypeAlert('Please enter job type')
        else if (!expLevel) setExpLevelAlert('Please enter experience level')
        else if (convertToDOM.childNodes[0].lastChild.textContent.trim().length < 500) setJobDetailsAlert('Job details should not be less than 500 chars')
        else {

            setLoading(true)
            const dataObj = { id, jobTitle, location, salary, jobType, expLevel, jobDetails }

            axios.patch(`${api}/api/company/job/${id}`, dataObj).then(res => {
                if (res.data.updated) {
                    setState(true)
                    publishedRef.current.scrollIntoView({behavior: 'smooth'})
                    setLoading(false)

                    setTimeout(() => {
                        setState(false)
                    }, 4000)
                }
            })
        }
    }

    useEffect(() => {

        axios.get(`${api}/api/company/job/${id}`).then(res => {
            if (res.data.job) {

                const { job } = res.data

                setJobTitle(job.jobTitle)
                setJobDetails(job.jobDetails)
                setLocation(job.location)
                setJobType(job.jobType)
                setSalary(job.salary)
                setExpLevel(job.expLevel)

                setJob(true)
            }
        })

    }, [])

    return (
        <LoggedLayout data={data}>
            {
                job ? (
                    <div className="mb-3">
                        <div className="shadow pb-6">
                            <Nav data={data} />
                        </div>
                        {
                            state ? (
                                <div ref={publishedRef} className="flex items-center text-cyan-600 bg-cyan-100 rounded-sm p-2 my-3 mx-4 sm:mx-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <p className="p-4 font-medium">
                                        Job updated successfuly
                                    </p>
                                </div>
                            ) : ''
                        }
                        <form onSubmit={handleSubmit}>
                            <div className="mt-12 mx-4 grid-cols-3 md:gap-8 lg:gap-12 md:grid">
                                <JobForm 
                                    states={{ 
                                        jobType, setLocation, setJobType, setSalary, setExpLevel, setJobTitle,
                                        jobTitleAlert, locationAlert, jobTypeAlert, salaryAlert, expLevelAlert
                                    }}
                                    
                                    fields={{
                                        jobTitle, location, salary, expLevel
                                    }}
                                />
                                <JobEditor jobDetailsAlert={ jobDetailsAlert } defaultValue={jobDetails} getContent={(e) => setJobDetails(e)} />
                            </div>
                            <div className="mx-4">
                                <button type="submit" className="flex items-center justify-center mt-3 border font-semibold focus:outline-none py-2 rounded-md border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 hover:border-cyan-700 focus:ring focus:ring-cyan-500 focus:ring-opacity-50 active:bg-cyan-700 active:border-cyan-700 w-full sm:w-auto sm:px-12">
                                    {
                                        loading ? (
                                        <svg className="animate-spin mx-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        ) : ''
                                    }
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>
                ) : ''
            }
        </LoggedLayout>
    )
}

export default userData(index)