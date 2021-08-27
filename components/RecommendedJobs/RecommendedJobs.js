import axios from "axios"
import { useEffect, useState } from "react"
import api from "../../api/api"
import keyword from "../Keyword/keyword"
import JobCard from './JobCard'

export default ({ data }) => {

    const { userData, loggedIn } = data
    const [jobs, setJobs] = useState([])
    
    
    useEffect(() => {
        
        const keyWord = keyword()

        const query = `jobTitle=${loggedIn ? userData.jobTitle.toLowerCase() : ''}&keyword=${keyWord && keyWord.key > 3 ? keyWord.value : ''}`
        
        axios.get(`${api}/api/jobs/recommended?${query}`).then(res => {
            if (res.data.jobs) setJobs(res.data.jobs)
        })
    }, [])

    return (
        <>
            {
                jobs.length > 0 ? (
                    <div>
                        <h1 className="font-semibold text-2xl text-gray-800 block">
                            Recommended
                        </h1>
                        <p className="text-gray-500">
                            Recommendations are based on your {loggedIn && userData.role == 'employee' ? 'profile, and' : ''} activity on USA JOBS
                        </p>
                        <ul className="space-y-4 mt-4">
                            <JobCard jobs={jobs} />
                        </ul>
                    </div>
                    
                ) : ''
            }
        </>
    )
}