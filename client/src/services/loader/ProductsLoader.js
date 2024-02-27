const productsLoader = async () => {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();
    return data;
};

const productLoader = async ({params}) => {
    const response = await fetch(`http://localhost:5000/products/${params.id}`)
    const product = await response.json()
    return product
}

export { productsLoader, productLoader }