import { useLoaderData, Form } from "react-router-dom"

const EditProduct = () => {
    const product = useLoaderData()
    return (
        <Form method="PUT" action={`/products/${product.id}`} className="form">
            <div className="form__row">
                <input type="text" name="name"
                placeholder="name" className="form__input" defaultValue={product.name}/>
                <input type="number" name="price"
                placeholder="price" className="form__input" defaultValue={product.price}/>
            </div>
            <div className="form__row">
                <textarea name="description" className="form__input" 
                placeholder="description" defaultValue={product.description}/>
            </div>
            <button className="btn btn-success" style={{
                marginTop: "10px"
            }}>Edit Product</button>
        </Form>
    )
}

export default EditProduct