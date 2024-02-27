import { useLoaderData, Link, useSubmit } from "react-router-dom";
import Table from "../../components/Table/Table";
import ContentTop from "../../components/ContentTop/ContentTop"
import { FaRegTrashCan } from "react-icons/fa6";

const ProductList = () => {
  const products = useLoaderData();
  const submit = useSubmit()
  return (
    <>
      <ContentTop pageName="Product's List"/>
      <Table>
        <thead>
          <tr>
            <th>ProductName</th>
            <th>ProductDescription</th>
            <th colSpan="2">ProductPrice</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>
                  <button type="submit" className="btn btn-danger" onClick={() => {
                    submit(null, {method: "DELETE", action: `/products/${product.id}/delete`})
                  }}>
                      <FaRegTrashCan/>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to="/products/newproduct" className="btn btn-success" style={{
          marginTop: "15px",
      }}>
        Create Product
      </Link>
    </>
  );
};

export default ProductList;
