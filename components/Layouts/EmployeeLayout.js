import { useRouter } from "next/dist/client/router"

const EmployeeLayout = ({ children, data }) => {
    const router = useRouter()

    return data.loggedIn ? (
        data.userData.role == 'employee' ? (
            children
        ) : ''
    ) : router.push('/')
}

export default EmployeeLayout