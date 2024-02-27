import routes from "./routes.js"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Loading from "./components/Loading/Loading"

const Router = () => {
    const router = createBrowserRouter(routes)
    return (
        <RouterProvider router={router} fallbackElement={<Loading/>}/>
    )
}

export default Router