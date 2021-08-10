import ApplyBtn from "./ApplyBtn/ApplyBtn"
import Details from "./Details/Details"

export default ({ data }) => {
    return (
        <div className="col-span-2">
            <Details />
            <ApplyBtn data={data} w="w-full sm:px-4 sm:w-auto md:hidden" />
        </div>
    )
}