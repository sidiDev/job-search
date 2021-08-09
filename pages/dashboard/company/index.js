import Nav from "../../../components/Nav/Nav"
import Sidebar from "../../../dashboard/company/Sidebar/Sidebar"
import Profile from "../../../dashboard/company/Profile/Profile"
import LoggedLayout from '../../../components/Layouts/LoggedLayout'
import userData from "../../../components/userData/UserData"

const index = ({ data }) => {
    return (
        <LoggedLayout data={data}>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <div className="mt-12 mx-4 gap-12 grid-cols-3 sm:grid sm:mx-8">
                <Sidebar />
                <Profile />
            </div>
        </LoggedLayout>
    )
}

export default userData(index)