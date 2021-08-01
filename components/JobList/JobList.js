import JobCard from "../JobCard/JobCard"

export default () => {
    return (
        <div className="flex-1">
            <ul className="space-y-4">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />

                <JobCard />
                <JobCard />
            </ul>
        </div>
    )
}