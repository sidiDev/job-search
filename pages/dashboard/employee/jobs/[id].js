import Nav from "../../../../components/Nav/Nav"
import Jobs from "../../../../dashboard/employee/Jobs/Jobs"
import Sidebar from "../../../../dashboard/employee/Sidebar/Sidebar"
import userData from "../../../../components/userData/UserData"
import EmployeeLayout from "../../../../components/Layouts/EmployeeLayout"

const index = ({ data }) => {
    return (
        <EmployeeLayout data={data}>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <div className="mt-12 mx-4 gap-12 grid-cols-3 sm:grid sm:mx-8">
                <Sidebar data={data.userData} />
                <Jobs userId={data.userData._id} />
            </div>
        </EmployeeLayout>
    )
}

export default userData(index)