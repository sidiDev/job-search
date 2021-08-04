import Head from "next/head"
import Login from "../../components/Login/Login"
import Nav from "../../components/Nav/Nav"

export default () => {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <div className="shadow pb-6">
                <Nav />
            </div>
            <Login />
        </div>
    )
}