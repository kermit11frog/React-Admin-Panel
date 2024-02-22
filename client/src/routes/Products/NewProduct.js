import { Form, redirect } from "react-router-dom"

const action = async ({request}) => {
    let formData = await request.formData()
    formData = Object.fromEntries(formData)
    await fetch(`http://localhost:5000/products`, {
        method: "POST",
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

const NewProduct = () => {
    return (
        <Form method="POST" action={`/products/newproduct`}>
            <input type="text" placeholder="product name" name="name"/>
            <input type="text" placeholder="product description" name="description"/>
            <input type="number" placeholder="product price" name="price"/>
            <button>Create Product</button>
        </Form>
    )
}

export default NewProduct
export { action }