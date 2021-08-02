import ApplyBtn from "./ApplyBtn/ApplyBtn"
import Details from "./Details/Details"

export default () => {
    return (
        <div className="col-span-2">
            <Details />
            <ApplyBtn w="w-full sm:px-4 sm:w-auto md:hidden" />
        </div>
    )
}