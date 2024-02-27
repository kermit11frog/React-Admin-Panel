import { redirect } from "react-router-dom"

const productCreateAction = async ({request}) => {
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

const productEditAction = async ({request, params}) => {
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

const productDeleteAction = async ({params}) => {
    await fetch(`http://localhost:5000/products/${params.id}`, {
        method: "DELETE"
    });
    return redirect("/products")
}

export { productEditAction, productDeleteAction, productCreateAction }