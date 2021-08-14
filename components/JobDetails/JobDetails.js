import ApplyBtn from "./ApplyBtn/ApplyBtn"
import Details from "./Details/Details"

export default ({ data, job }) => {
    return (
        <div className="col-span-2">
            <h1 className="hidden text-3xl font-semibold mt-4 mb-7 md:mt-0 md:block">{job.jobTitle}</h1>
            <Details job={job} />
            <ApplyBtn data={data} w="w-full sm:px-4 sm:w-auto md:hidden" />
        </div>
    )
}