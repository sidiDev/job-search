const CompanyLayout = ({ children, data }) => {
    return data.loggedIn ? (
        data.userData.role == 'company' ? (
            children
        ) : ''
    ) : ''
}

export default CompanyLayout