export const getProducts = (setProducts) => fetch("https://fakestoreapi.com/products").then(res => res.json()).then(res => setProducts(res))


export const getSingleProduct = (setProduct, id) => fetch("https://fakestoreapi.com/products/" + id).then(res => res.json()).then(res => setProduct(res))