export default ({ job }) => {
    return (
        <div className="mt-4 md:mt-0">
            <div className="mt-4 job-details" dangerouslySetInnerHTML={{__html:job.jobDetails}}>
            </div>
        </div>
    )
}