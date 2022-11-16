import React, { useState, useEffect } from "react"
import ProductList from "../components/ProductList"
import ProductForm from "../components/ProductForm"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Manager = () => {
  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()
  const [errors, setErrors] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        setProducts(response.data)
        setLoaded(true)
      })
      .catch((error) => console.error(error))
  }, [])

  const removeFromDom = (productId) => {
    setProducts(products.filter((p) => p._id != productId))
  }

  const createProduct = (product) => {
    axios
      .post("http://localhost:8000/api/products", product)
      .then((response) => {
        console.log(response.data)
        setProducts([...products, response.data])
        navigate(0)
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors
        const errorArr = []
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
      })
  }

  return (
    <div>
      <ProductForm
        onSubmitProp={createProduct}
        errors={errors}
        initialTitle=""
        initialDescription=""
        initialPrice=""
        heading="Create Product"
      ></ProductForm>
      {loaded && (
        <ProductList
          removeFromDom={removeFromDom}
          products={products}
        ></ProductList>
      )}
    </div>
  )
}

export default Manager
