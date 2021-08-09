import { useEffect, useState } from "react"
import Nav from "../../../../components/Nav/Nav"
import ApplicantCard from "../../../../dashboard/company/Applicants/ApplicantCard"
import ApplicantInfo from "../../../../dashboard/company/Applicants/ApplicantInfo"
import userData from "../../../../components/userData/UserData"
import LoggedLayout from "../../../../components/Layouts/LoggedLayout"

const index = ({ data }) => {

    const [state, setState] = useState(false)

    useEffect(() => {
        state ? 
        (document.body.className = 'overflow-hidden sm:overflow-auto') : 
        ( document.body.className = 'overflow-auto' )
    }, [state])

    return (
        <LoggedLayout data={data}>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <div className="relative mt-12 mx-4 items-start gap-4 sm:mx-8 sm:flex lg:gap-8">
                <ul className="flex-1 space-y-3">
                    <ApplicantCard setState={ setState } />
                    <ApplicantCard setState={ setState } />
                    <ApplicantCard setState={ setState } />
                    <ApplicantCard setState={ setState } />
                    <ApplicantCard setState={ setState } />
                    <ApplicantCard setState={ setState } />
                    <ApplicantCard setState={ setState } />
                    <ApplicantCard setState={ setState } />
                    <ApplicantCard setState={ setState } />

                </ul>
                <ApplicantInfo state={ state } setState={ setState } />
            </div>
        </LoggedLayout>
    )
}

export default userData(index)