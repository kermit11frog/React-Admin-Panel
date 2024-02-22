import routes from "./routes.js"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const Router = () => {
    const router = createBrowserRouter(routes)
    return (
        <RouterProvider router={router}/>
    )
}

export default Router