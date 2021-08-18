import Head from "next/head"
import ApplyForm from "../../components/ApplyForm/ApplyForm"
import Nav from '../../components/Nav/Nav'
import EmployeeLayout from '../../components/Layouts/EmployeeLayout'
import applyData from "../../components/userData/ApplyData"
import Page404 from "../../components/PageError/Page404"

const index = ({ data, companyId }) => {
    return (
        <EmployeeLayout data={data}>
            <Head>
                <title>Apply for job</title>
            </Head>
            <div className="shadow pb-6">
                <Nav data={data} />
            </div>
            {
                companyId.state ? (
                    <ApplyForm data={data.userData} companyId={companyId.companyId} />
                ) : <Page404 />
            }
        </EmployeeLayout>
    )
}

export default applyData(index)