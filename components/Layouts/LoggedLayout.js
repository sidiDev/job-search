import { useRouter } from "next/dist/client/router"

const LoggedLayout = ({ children, data }) => {
    const router = useRouter()
    return data.loggedIn ? children : router.push('/')
}

export default LoggedLayout