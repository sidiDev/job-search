import { useRouter } from "next/dist/client/router"

const Layout = ({ children, data }) => {
    const router = useRouter()
    return data.loggedIn ? router.push('') : children
}

export default Layout