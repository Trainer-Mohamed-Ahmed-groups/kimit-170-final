import { useEffect, useState } from "react"
import { getProducts } from "../api/getproducts"
import { Row, Col, Card, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
const NewArrivals = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        getProducts(setProducts)
    }, [])

    return (
        <Container>
            <Row>
                {
                    products.filter((_, i) => i <= 3).map(product =>
                        <Col className="p-3" key={product.id} sm={12} lg={3}>
                            <Card className="h-100">
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            <Link to="/products" className="btn btn-info">View more</Link>
        </Container>
    )
}

export default NewArrivals