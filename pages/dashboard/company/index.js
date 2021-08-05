import Nav from "../../../components/Nav/Nav"
import Sidebar from "../../../dashboard/company/Sidebar/Sidebar"
import Profile from "../../../dashboard/company/Profile/Profile"

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