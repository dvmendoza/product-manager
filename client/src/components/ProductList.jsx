import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import DeleteButton from "./DeleteButton"

const ProductList = (props) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => setProducts(response.data))
  }, [])

  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id != productId))
  }

  return (
    <div className="card p-0 mt-3">
      <div className="card-body">
        <h4>Products</h4>
        <div className="card bg-light">
          <div className="card-body pt-0">
            {products.map((product) => {
              return (
                <div
                  key={product._id}
                  className="row justify-content-between mt-3"
                >
                  <div className="col text-start">
                    <Link
                      to={"./products/" + product._id}
                      className="btn btn-primary"
                    >
                      {product.title}
                    </Link>
                  </div>
                  <div className="col-3">
                    <Link
                      to={"./products/" + product._id + "/edit"}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                  </div>
                  <div className="col-3">
                    <DeleteButton
                      productId={product._id}
                      successCallback={() => removeFromDom(product._id)}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
