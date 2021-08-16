import Nav from "../../../components/Nav/Nav"
import Sidebar from "../../../dashboard/company/Sidebar/Sidebar"
import Profile from "../../../dashboard/company/Profile/Profile"
import userData from "../../../components/userData/UserData"
import CompanyLayout from "../../../components/Layouts/CompanyLayout"

const index = ({ data }) => {
    return (
        <CompanyLayout data={data}>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <div className="mt-12 mx-4 gap-12 grid-cols-3 sm:grid sm:mx-8">
                <Sidebar data={data} />
                <Profile data={data.userData} />
            </div>
        </CompanyLayout>
    )
}

export default userData(index)