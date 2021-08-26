import Head from "next/head"
import { useEffect } from "react"
import JobDetails from "../../components/JobDetails/JobDetails"
import JobDetailsSide from "../../components/JobDetails/JobDetailsSide/JobDetailsSide"
import JobHeader from "../../components/JobDetails/JobHeader/JobHeader"
import lStorage from "../../components/LStorage/lStorage"
import Nav from '../../components/Nav/Nav'
import JobData from "../../components/userData/JobData"

const Index = ({ data, job }) => {
    const jobData = job.job

    useEffect(() => {
        jobData.jobTitle.toLocaleLowerCase().split(' ').forEach(element => {
            lStorage.setItem('data', element)
        });
    }, [])

    return (
        <>
        <Head>
            <meta name="description" content={jobData.company.about} />
            <title>{jobData.jobTitle}</title>
        </Head>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <div className="mt-5 mx-4 sm:mx-8">
                <JobHeader company={jobData.company} />
                <main className="mt-12 mb-3">
                    <article>
                        <h1 className="text-2xl font-semibold mb-8 md:hidden">{jobData.jobTitle}</h1>
                        <div className="grid-cols-3 md:grid md:gap-4 lg:gap-12">
                            <JobDetailsSide job={jobData} data={data} />
                            <JobDetails job={jobData} data={data} />
                        </div>
                    </article>
                </main>
            </div>
        </>
    )
}

export default JobData(Index)