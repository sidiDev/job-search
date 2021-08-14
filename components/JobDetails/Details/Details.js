export default ({ job }) => {
    return (
        <div className="mt-6 prose md:mt-0" dangerouslySetInnerHTML={{__html:job.jobDetails}}>
        </div>
    )
}