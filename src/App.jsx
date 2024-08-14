import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import SiteNav from "./layout/SiteNav"
import Products from "./views/Products"
import ErrorPage from "./views/ErrorPage"
import ProductDetails from "./views/ProductDetails"
import EditProduct from "./components/EditProduct"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

function App() {

  const { i18n } = useTranslation();

  let themeData = useContext(ThemeContext)

  // console.log(themeData)


  return (
    <div className={(i18n.language === 'ar' ? 'rtl ' : '') + themeData.theme}>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

    </div>
  )
}

export default App
