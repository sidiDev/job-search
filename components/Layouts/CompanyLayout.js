import Page404 from "../PageError/Page404"

const CompanyLayout = ({ children, data }) => {

    return data.loggedIn ? (
        data.userData.role == 'company' ? (
            children
        ) : ''
    ) : <Page404 />
}

export default CompanyLayout