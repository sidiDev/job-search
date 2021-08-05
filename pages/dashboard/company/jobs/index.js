import Nav from "../../../../components/Nav/Nav"
import Sidebar from "../../../../dashboard/company/Sidebar/Sidebar"
import Jobs from "../../../../dashboard/company/Jobs/Jobs"

export default () => {
    return (
        <div>
            <div className="shadow pb-6">
                <Nav />
            </div>
            <div className="mt-12 mx-4 grid-cols-3 gap-2 sm:grid lg:gap-12 sm:mx-8">
                <Sidebar />
                <Jobs />
            </div>
        </div>
    )
}