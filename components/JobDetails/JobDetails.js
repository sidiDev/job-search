import ApplyBtn from "./ApplyBtn/ApplyBtn"
import Details from "./Details/Details"

export default ({ data, job }) => {
    return (
        <div className="col-span-2 relative">
            <h1 className="hidden text-3xl font-semibold mt-4 mb-7 md:mt-0 md:block">{job.jobTitle}</h1>
            <div className="pb-14 sm:pb-0">
                <Details job={job} />
            </div>
            <div className="fixed left-0 right-0 mx-4 bottom-2 sm:static sm:mx-0">
                <ApplyBtn data={data} w="w-full py-3 sm:px-12 sm:w-auto md:hidden" />
            </div>
        </div>
    )
}