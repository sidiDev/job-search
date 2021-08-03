import Login from "../../components/Login/Login"
import Nav from "../../components/Nav/Nav"

export default () => {
    return (
        <div>
            <div className="shadow pb-6">
                <Nav />
            </div>
            <Login />
        </div>
    )
}