import Nav from "../../../../components/Nav/Nav"
import Jobs from "../../../../dashboard/employee/Jobs/Jobs"
import Sidebar from "../../../../dashboard/employee/Sidebar/Sidebar"

export default () => {
    return (
        <div>
            <div className="shadow pb-6">
                <Nav />
            </div>
            <div className="mt-12 mx-4 gap-12 grid-cols-3 sm:grid">
                <Sidebar />
                <Jobs />
            </div>
        </div>
    )
}