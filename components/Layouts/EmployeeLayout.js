const EmployeeLayout = ({ children, data }) => {
    return data.loggedIn ? (
        data.userData.role == 'employee' ? (
            children
        ) : ''
    ) : ''
}

export default EmployeeLayout