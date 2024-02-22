import { redirect } from "react-router-dom"

const action = async ({params}) => {
    await fetch(`http://localhost:5000/products/${params.id}`, {
        method: "DELETE"
    });
    return redirect("/products")
}

const DeleteProduct = () => {
    return (
        <h2>this page is not available</h2>
    )
}

export default DeleteProduct
export { action }