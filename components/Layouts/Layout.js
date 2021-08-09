const Layout = ({ children, data }) => {
    return data.loggedIn ? '' : children
}

export default Layout