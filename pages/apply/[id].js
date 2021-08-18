import Head from "next/head"
import ApplyForm from "../../components/ApplyForm/ApplyForm"
import Nav from '../../components/Nav/Nav'
import EmployeeLayout from '../../components/Layouts/EmployeeLayout'
import userData from "../../components/userData/UserData"

const index = ({ data }) => {
    return (
        <EmployeeLayout data={data}>
            <Head>
                <title>Apply for job</title>
            </Head>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <ApplyForm data={data.userData} />
        </EmployeeLayout>
    )
}

export default userData(index)