import { useRouteError } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./ErrorPage.css"

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <Sidebar/>
            <div className="content go-center">
                <h1 className="errorTitle">{error.status}</h1>
                <p className="errorMessage">{error.statusText || error.message}</p>
            </div>
        </>
    )
}

export default ErrorPage