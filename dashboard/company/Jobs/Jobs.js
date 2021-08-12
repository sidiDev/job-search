import axios from "axios"
import { useEffect, useState } from "react"
import api from "../../../api/api"
import JobCard from "./JobCard"

export default ({ data }) => {

    const [state, setState] = useState(false)
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios.get(`${api}/api/company/jobs/${data._id}`).then(res => {
            if (res.data.jobs) {
                console.log(res.data.jobs);
                setLoading(false)
                setJobs(res.data.jobs)
            }
        })

    }, [state])

    return (
        <div className="col-span-2">
            <h1 className="font-semibold text-2xl">
                Jobs posted
            </h1>
            {
                loading ? (
                    <svg className="animate-spin mx-auto mt-8 h-14 w-14 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    <ul className="space-y-6 mt-4">
                        <JobCard 
                            jobs={jobs}
                            setState={setState}
                            state={state}
                        />
                    </ul>
                )
            }
        </div>
    )
}