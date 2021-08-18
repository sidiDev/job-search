import Page404 from "../PageError/Page404"

const Layout = ({ children, data }) => {
    return data.loggedIn ? <Page404 /> : children
}

export default Layout