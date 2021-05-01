import React, {useState, useEffect} from 'react'
import { Col, Row } from "react-bootstrap";
import Product from "../components/product";
import axios from "axios";

const HomePage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async() => {
            const {data} = await axios.get('/products')
            setProducts(data)
            console.log(data)
        }
        fetchProducts()
    },[])

    return (
        <div>
            <h1 className="text-center">Latest Products</h1>
            <Row>
                {
                    products.map( product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                            <Product product={product} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default HomePage
