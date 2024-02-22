import { useLoaderData, Link, Form } from "react-router-dom"

const loader = async () => {
    const response = await fetch("http://localhost:5000/products")
    const data = await response.json()
    return data
}

const ProductList = () => {
    const products = useLoaderData()
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>ProductName</th>
                    <th>ProductDescription</th>
                    <th>ProductPrice</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => {
                        return (
                            <tr key={product.id}>
                                <td><Link to={`/products/${product.id}`}>{product.name}</Link></td>
                                <td>{product.description}</td>
                                <td>${product.price}</td>
                                <td>
                                    <Form method="POST" action={`/products/${product.id}/delete`}>
                                        <button type="submit" className="deleteButton">Delete</button>
                                    </Form>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <Link to="/products/newproduct" className="createButton">
            Create Product
        </Link>
        </>
    )
}

export default ProductList
export { loader }