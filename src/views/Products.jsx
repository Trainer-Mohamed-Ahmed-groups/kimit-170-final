import { useEffect, useState } from "react"
import { getProducts } from "../api/getproducts"
import { Row, Col, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function Products() {
    const [products, setProducts] = useState([])


    useEffect(() => {
        getProducts(setProducts)
    }, [])
    return (
        <Container>
            <Row>
                {
                    products.length > 0
                        ?
                        products.map(product =>
                            <Col className="p-3" key={product.id} sm={12} lg={3}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Link className="btn btn-primary" to={"/products/" + product.id}>View details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                        :
                        <Col className="p-3" sm={12} lg={3}>
                            <div className="card" aria-hidden="true">
                                <div className="card-body">
                                    <h5 className="card-title placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                        <span className="placeholder col-8"></span>
                                    </p>
                                    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                </div>
                            </div>
                        </Col>
                }
            </Row></Container>
    )
}
