import Head from "next/head"
import ApplyForm from "../../components/ApplyForm/ApplyForm"
import Nav from '../../components/Nav/Nav'

export default () => {
    return (
        <div>
            <Head>
                <title>Apply for job</title>
            </Head>
            <div className="shadow pb-6">
                <Nav />
            </div>
            <ApplyForm />
        </div>
    )
}