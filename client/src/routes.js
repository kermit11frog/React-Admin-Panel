import Root from "./routes/Root"
import Dashboard, { loader as dashboardLoader } from "./routes/Dashboard/Dashboard"
import ProductList, { loader as productListLoader } from "./routes/Products/ProductList"
import DeleteProduct, { action as deleteProductAction } from "./routes/Products/DeleteProduct"
import EditProduct, { loader as productLoader, action as productAction } from "./routes/Products/EditProduct"
import UserList, { loader as userListLoader } from "./routes/Users/UserList"
import NewProduct, { action as newProductAction } from "./routes/Products/NewProduct"
import ErrorPage from "./routes/ErrorPage/ErrorPage"

const routes = [
    {path: "/", element: <Root/>, errorElement: <ErrorPage/>, children: [
        {index: true, element: <Dashboard/>, loader: dashboardLoader},
        {path: "products", element: <ProductList/>, loader: productListLoader},
        {path: "products/:id", element: <EditProduct/>, loader: productLoader, action: productAction},
        {path: "products/newproduct", element: <NewProduct/>, action: newProductAction},
        {path: "products/:id/delete", element: <DeleteProduct/>, action: deleteProductAction},
        {path: "users", element: <UserList/>, loader: userListLoader},
        {path: "settings", element: <h2>ComingSoon ...</h2>},
    ]}
]

export default routes