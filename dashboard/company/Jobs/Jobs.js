import JobCard from "./JobCard"

export default () => {
    return (
        <div className="col-span-2">
            <h1 className="font-semibold text-2xl">
                Jobs posted
            </h1>
            <ul className="space-y-6 mt-4">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </ul>
        </div>
    )
}