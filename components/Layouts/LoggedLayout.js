const LoggedLayout = ({ children, data }) => {
    return data.loggedIn ? children : ''
}

export default LoggedLayout