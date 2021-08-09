import { useState } from "react"
import Nav from "../../../../components/Nav/Nav"
import userData from "../../../../components/userData/UserData"
import LoggedLayout from "../../../../components/Layouts/LoggedLayout"
import NewJobEditor from "../../../../dashboard/company/PostNewJob/NewJobEditor"
import NewJobForm from "../../../../dashboard/company/PostNewJob/NewJobForm"

const index = ({ data }) => {

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
        else if (!salary) setSalaryAlert('Please enter job salary')
        else if (!jobType) setJobTypeAlert('Please enter job type')
        else if (!expLevel) setExpLevelAlert('Please enter experience level')
        else if (convertToDOM.childNodes[0].lastChild.textContent.trim().length < 500) setJobDetailsAlert('Job details should not be less than 500 chars')
        else {
            console.log(true)
        }
    }

    return (
        <LoggedLayout data={data}>
            <div className="mb-3">
                <div className="shadow pb-6">
                    <Nav data={data} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mt-12 mx-4 grid-cols-3 md:gap-8 lg:gap-12 md:grid">
                        <NewJobForm states={ { 
                            jobType, setLocation, setJobType, setSalary, setExpLevel, setJobTitle,
                            jobTitleAlert, locationAlert, jobTypeAlert, salaryAlert, expLevelAlert
                        } } />
                        <NewJobEditor jobDetailsAlert={ jobDetailsAlert } getContent={(e) => setJobDetails(e)} />
                    </div>
                    <div className="mx-4">
                        <button type="submit" className="mt-3 border font-semibold focus:outline-none py-2 rounded-md border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 hover:border-cyan-700 focus:ring focus:ring-cyan-500 focus:ring-opacity-50 active:bg-cyan-700 active:border-cyan-700 w-full sm:w-auto sm:px-12">
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </LoggedLayout>
    )
}

export default userData(index)