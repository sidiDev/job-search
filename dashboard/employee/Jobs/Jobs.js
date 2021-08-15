import axios from "axios"
import { useEffect, useState } from "react"
import api from "../../../api/api"
import JobCard from "./JobCard"
import LoadingJob from '../../../components/LoadingJob/LoadingJob'
import { useRouter } from "next/dist/client/router"

export default ({ userId }) => {

    const router = useRouter()
    const { id } = router.query

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${api}/api/employee/requests/${id}`).then(res => {
            if (res.data.jobs) {
                console.log(res.data.jobs);
                setLoading(false)
                setJobs(res.data.jobs)
            }
        })
    }, [])
    return (
        <div className="col-span-2">
            <h1 className="font-semibold text-2xl">
                The jobs you apllied for
            </h1>
            <ul className="space-y-6 mt-4 relative">
                {
                    loading ? (
                        <LoadingJob />
                    ) : (
                        <JobCard userId={userId} jobs={jobs} setJobs={setJobs} />
                    )
                }
            </ul>
        </div>
    )
}