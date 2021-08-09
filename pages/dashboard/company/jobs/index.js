import Nav from "../../../../components/Nav/Nav"
import Sidebar from "../../../../dashboard/company/Sidebar/Sidebar"
import Jobs from "../../../../dashboard/company/Jobs/Jobs"
import userData from "../../../../components/userData/UserData"
import LoggedLayout from "../../../../components/Layouts/LoggedLayout"

const index =  ({ data }) => {
    return (
        <LoggedLayout data={data}>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <div className="mt-12 mx-4 grid-cols-3 gap-2 sm:grid lg:gap-12 sm:mx-8">
                <Sidebar />
                <Jobs />
            </div>
        </LoggedLayout>
    )
}

export default userData(index)