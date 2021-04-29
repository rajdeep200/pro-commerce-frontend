import React from 'react'
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../components/rating";

const Product = ({product}) => {
    return (
        <div>
            <Card className="my-3 p-3 rounded">
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} alt="" />
                </Link>
                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title>
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text>
                        <div className="my-3">
                            <Rating value={product.rating} text={`${product.numReviews} review`} />
                        </div>
                    </Card.Text>
                    <Card.Text as="h3">
                        ${product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
