import { Form } from "react-router-dom"

const NewProduct = () => {
    return (
        <Form method="POST" action={`/products/newproduct`} className="form">
            <div className="form__row">
                <input type="text" name="name"
                placeholder="name" className="form__input"/>
                <input type="number" name="price"
                placeholder="price" className="form__input"/>
            </div>
            <div className="form__row">
                <textarea name="description" className="form__input" 
                placeholder="description"/>
            </div>
            <button className="btn btn-success" style={{
                marginTop: "10px"
            }}>Create Product</button>
        </Form>
    )
}

export default NewProduct