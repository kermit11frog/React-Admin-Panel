import { useRouteError } from "react-router-dom"
import "./ErrorPage.css"

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="error-box">
            <h1 className="error-title">{error.status}</h1>
            <p className="error-message">
                {error.statusText || error.message}
            </p>
        </div>
    )
}

export default ErrorPage