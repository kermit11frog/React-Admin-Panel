import ContentTop from "../../components/ContentTop/ContentTop";
import Card from "../../components/Card/Card";
import Table from "../../components/Table/Table"
import { FaChartBar } from "react-icons/fa";
import { MdBarChart, MdOutlineStackedLineChart } from "react-icons/md";
import { useLoaderData, Link } from "react-router-dom";

import "./Dashboard.css";

const Dashboard = () => {
  let products = useLoaderData();
  products = products.slice(
    products.length > 5 ? products.length - 5 : 0,
    products.length
  );
  return (
    <>
      <ContentTop pageName="Dashboard" />
      <div className="content__main">
        <div className="card_box align-items">
          <Card
            cardPercent={81}
            cardIcon={<FaChartBar />}
            cardIconColor="var(--color-primary)"
            cardTitle="Total Sales"
            cardValue="$25,024"
          />
          <Card
            cardPercent={62}
            cardIcon={<MdBarChart />}
            cardIconColor="var(--color-danger)"
            cardTitle="Total Expenses"
            cardValue="$14,160"
          />
          <Card
            cardPercent={44}
            cardIcon={<MdOutlineStackedLineChart />}
            cardIconColor="var(--color-success)"
            cardTitle="Total Income"
            cardValue="$10,864"
          />
        </div>
      </div>
      <div className="lastProducts">
        <h2>Last Products</h2>
        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                 <td><Link to={`/products/${product.id}`}>{product.name}</Link></td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Dashboard;
