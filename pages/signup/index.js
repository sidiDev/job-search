import Head from "next/head"
import Nav from "../../components/Nav/Nav"
import SignUp from "../../components/SignUp/SignUp"

export default () => {
    return (
        <div>
            <Head>
                <title>Sign up</title>
            </Head>
            <div className="shadow pb-6">
                <Nav />
            </div>
            <SignUp />
        </div>
    )
}