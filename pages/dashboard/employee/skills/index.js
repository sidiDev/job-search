import Nav from "../../../../components/Nav/Nav"
import Sidebar from "../../../../dashboard/employee/Sidebar/Sidebar"
import Skills from "../../../../dashboard/employee/Skills/Skills"

export default () => {
    return (
        <div>
            <div className="shadow pb-6">
                <Nav />
            </div>
            <div className="mt-12 mx-4 gap-12 grid-cols-3 sm:grid">
                <Sidebar />
                <Skills />
            </div>
        </div>
    )
}