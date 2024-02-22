import { useLoaderData, Form, redirect } from "react-router-dom"

const loader = async ({params}) => {
    const response = await fetch(`http://localhost:5000/products/${params.id}`)
    const product = await response.json()
    return product
}

const action = async ({request, params}) => {
    let formData = await request.formData()
    formData = Object.fromEntries(formData)
    await fetch(`http://localhost:5000/products/${params.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: formData.name,
            description: formData.description,
            price: formData.price
        })
    })
    return redirect("/products")
}

const EditProduct = () => {
    const product = useLoaderData()
    return (
        <Form method="POST" action={`/products/${product.id}`}>
            <input type="text" placeholder="product name" defaultValue={product.name} name="name"/>
            <input type="text" placeholder="product description" defaultValue={product.description} name="description"/>
            <input type="number" placeholder="product price" defaultValue={product.price} name="price"/>
            <button>Edit Product</button>
        </Form>
    )
}

export default EditProduct
export { loader, action }