import Head from "next/head"
import Login from "../../components/Login/Login"
import Nav from "../../components/Nav/Nav"
import userData from "../../components/userData/UserData"
import Layout from '../../components/Layouts/Layout'

const index = ({ data }) => {
    return (
        <Layout data={data}>
            <Head>
                <title>Login</title>
            </Head>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            <Login />
        </Layout>
    )
}

export default userData(index)