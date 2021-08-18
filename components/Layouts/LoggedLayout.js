import Page404 from "../PageError/Page404"

const LoggedLayout = ({ children, data }) => {
    return data.loggedIn ? children : <Page404 />
}

export default LoggedLayout