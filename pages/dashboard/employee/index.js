import Nav from "../../../components/Nav/Nav"
import Profile from "../../../dashboard/employee/Profile/Profile"
import Sidebar from "../../../dashboard/employee/Sidebar/Sidebar"

export default () => {
    return (
        <div>
            <div className="shadow pb-6">
                <Nav />
            </div>
            <div className="mt-12 mx-4 gap-12 grid-cols-3 sm:grid sm:mx-8">
                <Sidebar />
                <Profile />
            </div>
        </div>
    )
}