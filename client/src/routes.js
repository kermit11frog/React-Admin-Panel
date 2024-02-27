import Root from "./pages/Root"
import Dashboard from "./pages/Dashboard/Dashboard"
import ProductList from "./pages/Products/ProductList"
import DeleteProduct from "./pages/Products/DeleteProduct"
import EditProduct from "./pages/Products/EditProduct"
import UserList from "./pages/Users/UserList"
import NewProduct from "./pages/Products/NewProduct"
import ErrorPage from "./pages/ErrorPage/ErrorPage"

import { productsLoader, productLoader } from "./services/loader/ProductsLoader"
import { productEditAction, productDeleteAction, productCreateAction } from "./services/action/ProductsActions"
import { usersLoader } from "./services/loader/UsersLoaders"

const routes = [
    {path: "/", element: <Root/>, errorElement: <ErrorPage/>, children: [
        {index: true, element: <Dashboard/>, loader: productsLoader},
        {path: "products", element: <ProductList/>, loader: productsLoader},
        {path: "products/:id", element: <EditProduct/>, loader: productLoader, action: productEditAction},
        {path: "products/newproduct", element: <NewProduct/>, action: productCreateAction},
        {path: "products/:id/delete", element: <DeleteProduct/>, action: productDeleteAction},
        {path: "users", element: <UserList/>, loader: usersLoader},
        {path: "settings", element: <h2>ComingSoon ...</h2>},
    ]}
]

export default routes