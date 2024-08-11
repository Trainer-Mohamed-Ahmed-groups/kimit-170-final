import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import SiteNav from "./layout/SiteNav"
import Products from "./views/Products"
import ErrorPage from "./views/ErrorPage"
import ProductDetails from "./views/ProductDetails"
import EditProduct from "./components/EditProduct"

function App() {

  return (
    <>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      
    </>
  )
}

export default App
