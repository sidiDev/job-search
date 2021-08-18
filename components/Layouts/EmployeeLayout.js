import Page404 from "../PageError/Page404"

const EmployeeLayout = ({ children, data }) => {

    return data.loggedIn ? (
        data.userData.role == 'employee' ? (
            children
        ) : ''
    ) : <Page404 />
}

export default EmployeeLayout