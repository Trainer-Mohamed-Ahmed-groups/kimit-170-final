import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleProduct } from "../api/getproducts"
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function EditProduct() {
    const [product, setProduct] = useState({})
    let navigate = useNavigate();

    const params = useParams()
    useEffect(() => {
        getSingleProduct(setProduct, params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let handleTitle = (ev) => {
        setProduct({ ...product, [ev.target.name]: ev.target.value })
        console.log(product)
    }

    let handleEdit = () => {
        console.log(product)
        fetch("http://localhost:3000/products/" + product.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(product)
        })

        navigate('/products/' + product.id)
    }


    return (
        <div>
            <h2>Edit product</h2>
            <Form.Group className="mb-3" >
                <Form.Label>Edit title</Form.Label>
                <Form.Control type="text"
                    name="title"
                    onChange={handleTitle}
                    placeholder="Edit title" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Edit price</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    onChange={handleTitle}
                    placeholder="Edit price" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Edit description</Form.Label>
                <Form.Control
                    type="text"
                    name="description"
                    onChange={handleTitle}
                    placeholder="Edit description" />
            </Form.Group>

            <button onClick={handleEdit} className="btn btn-primary" variant="Primary">Submit</button>
        </div>
    )
}