import JobType from "./JobType"
import SalaryRange from "./SalaryRange"
import data from '../../json/data.json'
import ExpLevel from "./ExpLevel"
import SubmitBtns from "./SubmitBtns"
import { useEffect, useState } from "react"
import { useRouter } from "next/dist/client/router"

export default ({ setState, enableScrolling }) => {

    const [jobType, setJobType] = useState('')
    const [salary, setSalary] = useState('')
    const [expLevel, setExpLevel] = useState('')

    const router = useRouter()

    const { query } = router

    const handleSubmit = (e) => {
        e.preventDefault()

        let { search = '', location = '' } = router.query
        
        if (jobType || salary || expLevel) {
            router.push({
                pathname: '/search',
                query: { search, location, jobType, salary, expLevel }
            })
        }
    }

    useEffect(() => {
        if (query) {
            setJobType(query.jobType)
            setSalary(query.salary)
            setExpLevel(query.expLevel)
        } else {
            setJobType('')
            setSalary('')
            setExpLevel('')
        }
    }, [query])

    return (
        <div className="bg-white pb-3 md:top-3 flex-1 md:max-w-sm lg:max-w-lg md:sticky md:h-96">
            <div className="h-8 sm:hidden">
                <button className="float-right text-red-600"
                    onClick={() => {
                        setState(false);
                        enableScrolling()
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <SalaryRange defaultValue={salary} setSalary={setSalary} />
                <JobType setJobType={setJobType} jobType={jobType} data={data} />
                <ExpLevel defaultValue={expLevel} setExpLevel={setExpLevel} data={data} />
                <SubmitBtns 
                    setState={setState}
                    enableScrolling={enableScrolling} 
                    filterData={ jobType, salary, expLevel } 
                />
            </form>
        </div>
    )
}