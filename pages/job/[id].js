import axios from "axios"
import Head from "next/head"
import api from "../../api/api"
import JobDetails from "../../components/JobDetails/JobDetails"
import JobDetailsSide from "../../components/JobDetails/JobDetailsSide/JobDetailsSide"
import JobHeader from "../../components/JobDetails/JobHeader/JobHeader"
import Nav from '../../components/Nav/Nav'
import _userData from "./_userData"

const index = ({ data, job }) => {
    const jobData = job.job

    return (
        <>
        <Head>
            <meta name="description" content="We need a front-end developer to help us in our mission" />
            <title>{jobData.jobTitle}</title>
        </Head>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <div className="mt-5 mx-4 sm:mx-8">
                <JobHeader company={jobData.company} />
                <main className="mt-12 mb-3">
                    <article className="grid-cols-3 md:grid md:gap-4 lg:gap-12">
                        <h1 className="text-2xl font-semibold">{jobData.jobTitle}</h1>
                        <JobDetailsSide job={jobData} data={data} />
                        <JobDetails job={jobData} data={data} />
                    </article>
                </main>
            </div>
        </>
    )
}

export default _userData(index)