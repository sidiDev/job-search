import { useRouter } from "next/dist/client/router"

const CompanyLayout = ({ children, data }) => {
    const router = useRouter()

    return data.loggedIn ? (
        data.userData.role == 'company' ? (
            children
        ) : ''
    ) : router.push('/')
}

export default CompanyLayout