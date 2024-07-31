import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleProduct } from "../api/getproducts"

export default function ProductDetails() {
    const [product, setProduct] = useState([])

    const params = useParams()
    useEffect(() => {
        getSingleProduct(setProduct, params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(params)
    return (
        <div>
            <h2>ProductDetails</h2>
            <img src={product.image}/>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
        </div>
    )
}
