import Nav from "../../../../components/Nav/Nav"
import Sidebar from "../../../../dashboard/employee/Sidebar/Sidebar"
import Skills from "../../../../dashboard/employee/Skills/Skills"
import userData from "../../../../components/userData/UserData"
import LoggedLayout from "../../../../components/Layouts/LoggedLayout"

const index = ({ data }) => {
    return (
        <LoggedLayout data={data}>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <div className="mt-12 mx-4 gap-12 grid-cols-3 sm:grid sm:mx-8">
                <Sidebar />
                <Skills />
            </div>
        </LoggedLayout>
    )
}

export default userData(index)