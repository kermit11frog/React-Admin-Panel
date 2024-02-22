import ContentTop from "../../components/ContentTop/ContentTop"
import { FaChartBar } from "react-icons/fa"
import { MdBarChart, MdOutlineStackedLineChart  } from "react-icons/md"
import Card from "../../components/Card/Card"
import { useLoaderData } from "react-router-dom"

import "./Dashboard.css"

const loader = async () => {
    const response = await fetch("http://localhost:5000/products")
    const data = await response.json()
    const last5Products = data.slice(data.length > 5 ? data.length - 5:0, data.length)
    return last5Products
}

const Dashboard = () => {
    let products = useLoaderData()
    return (
        <>
            <ContentTop pageName="Dashboard"/>
            <div className="content__main">
                <div className="card_box align-items">
                    <Card 
                    cardPercent={81} cardIcon={<FaChartBar/>} 
                    cardIconColor="var(--color-primary)" cardTitle="Total Sales"
                    cardValue="$25,024"/>
                    <Card 
                    cardPercent={62} cardIcon={<MdBarChart/>} 
                    cardIconColor="var(--color-danger)" cardTitle="Total Expenses"
                    cardValue="$14,160"/>
                    <Card 
                    cardPercent={44} cardIcon={<MdOutlineStackedLineChart />} 
                    cardIconColor="var(--color-success)" cardTitle="Total Income"
                    cardValue="$10,864"/>
                </div>
            </div>
            <div className="lastProducts">
                <h2>Last Products</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => {
                                return (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard
export { loader }