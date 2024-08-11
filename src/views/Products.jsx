import { useEffect, useState } from "react"
import { getProducts } from "../api/getproducts"
import { Row, Col, Card, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
export default function Products() {
    const [products, setProducts] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [filteredProducts, setFilteredProducts] = useState([])

    let handleSearch = (e) => {
        setSearchValue(e.target.value)
        fetch("https://fakestoreapi.com/carts?userId=" + e.target.value)
            .then(res => res.json())
            .then(res => console.log(res))
    }

    let handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                setProducts(products.filter(p => p.id !== id))

                fetch("http://localhost:3000/products/" + id, { method: 'DELETE' })
            }
        });


    }

    useEffect(() => {
        getProducts(setProducts)
        getProducts(setFilteredProducts)
    }, [])
    return (
        <Container>
            <input type="text" onChange={handleSearch} className="form-control" />
            <div>{searchValue}</div>
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
                                        <Link className="btn btn-info" to={"/products/edit/" + product.id}>Edit product</Link>
                                        <Button variant="danger" className="ms-2" onClick={() => handleDelete(product.id)}>Delete</Button>
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
