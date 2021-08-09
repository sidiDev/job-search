import Head from "next/head"
import ApplyForm from "../../components/ApplyForm/ApplyForm"
import Nav from '../../components/Nav/Nav'
import LoggedLayout from '../../components/Layouts/LoggedLayout'
import userData from "../../components/userData/UserData"

const index = ({ data }) => {
    return (
        <LoggedLayout data={data}>
            <Head>
                <title>Apply for job</title>
            </Head>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <ApplyForm />
        </LoggedLayout>
    )
}

export default userData(index)