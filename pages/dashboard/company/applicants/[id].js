import { useEffect, useState } from "react"
import Nav from "../../../../components/Nav/Nav"
import ApplicantCard from "../../../../dashboard/company/Applicants/ApplicantCard"
import ApplicantInfo from "../../../../dashboard/company/Applicants/ApplicantInfo"
import userData from "../../../../components/userData/UserData"
import CompanyLayout from "../../../../components/Layouts/CompanyLayout"
import axios from "axios"
import api from "../../../../api/api"
import { useRouter } from "next/dist/client/router"

const index = ({ data }) => {

    const router = useRouter()
    const { id } = router.query

    const [state, setState] = useState(false)
    const [loading, setLoading] = useState(true)
    const [applicants, setApplicants] = useState([])
    const [idx, setIdx] = useState(0)
    const [applicantInfo, setApplicantInfo] = useState([])

    useEffect(() => {
        state ? 
        (document.body.className = 'overflow-hidden sm:overflow-auto') : 
        ( document.body.className = 'overflow-auto' )
    }, [state])

    useEffect(() => {
        axios.get(`${api}/api/company/applicants/${id}`).then(res => {
            if (res.data.applicants) {
                setApplicants(res.data.applicants)
                res.data.applicants.length > 0 ? setApplicantInfo([res.data.applicants[0]]) : ''
                setLoading(false)
            }
        })
    }, [])

    useEffect(() => {
        if (applicants.length > 0) {
            setApplicantInfo([applicants[idx]])
        }
    }, [idx])

    return (
        <CompanyLayout data={data}>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <h1 className="mt-12 pb-4 text-2xl text-gray-800 mx-4 sm:mx-8">Applicants</h1>
            {
                loading ? (
                      <svg className="animate-spin mt-12 mx-auto h-16 w-16 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                ): (
                    applicants.length > 0 ? (
                        <div className="relative mt-12 mx-4 items-start gap-4 sm:mx-8 sm:flex lg:gap-8">
                            <ul className="flex-1 space-y-6">
                                <ApplicantCard
                                    applicants={applicants}
                                    setState={setState}
                                    setIdx={setIdx}
                                    setApplicants={setApplicants}
                                />

                            </ul>
                            <ApplicantInfo
                                state={ state }
                                setState={ setState }
                                applicantInfo={applicantInfo}
                            />
                        </div>
                    ) : ''
                )
            }
        </CompanyLayout>
    )
}

export default userData(index)