import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"

const Root = () => {
    return (
        <>
            <Sidebar/>
            <div className="content">
                <Outlet/>
            </div>
        </>
    )
}

export default Root