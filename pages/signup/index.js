import Head from "next/head"
import Nav from "../../components/Nav/Nav"
import SignUp from "../../components/SignUp/SignUp"
import userData from "../../components/userData/UserData"
import Layout from '../../components/Layouts/Layout'

const index = ({ data }) => {
    return (
        <Layout data={data}>
            <Head>
                <title>Sign up</title>
            </Head>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <SignUp />
        </Layout>
    )
}

export default userData(index)