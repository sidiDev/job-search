import JobDetails from "../../components/JobDetails/JobDetails"
import JobDetailsSide from "../../components/JobDetails/JobDetailsSide/JobDetailsSide"
import JobHeader from "../../components/JobDetails/JobHeader/JobHeader"
import Nav from '../../components/Nav/Nav'

export default () => {
    return (
        <>
            <div className="shadow pb-6">
                <Nav />
            </div>
            <div className="mt-5 mx-4 sm:mx-8">
                <JobHeader />
                <main className="mt-12 mb-3">
                    <article className="grid-cols-3 md:grid md:gap-4 lg:gap-12">
                        <JobDetailsSide />
                        <JobDetails />
                    </article>
                </main>
            </div>
        </>
    )
}