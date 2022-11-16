import React, { useState } from "react"

const ProductForm = ({
  initialTitle,
  initialPrice,
  initialDescription,
  onSubmitProp,
  heading,
  errors,
}) => {
  const [title, setTitle] = useState(initialTitle)
  const [price, setPrice] = useState(initialPrice)
  const [description, setDescription] = useState(initialDescription)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    onSubmitProp({ title, price, description })
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4>{heading}</h4>
        <div className="card bg-light">
          <div className="card-body">
            <form onSubmit={onSubmitHandler}>
              {errors.map((err, idx) => (
                <p key={idx} className="text-danger">
                  {err}
                </p>
              ))}
              <p>
                <label htmlFor="title">Title</label>
                <br />
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </p>
              <p>
                <label htmlFor="price">Price</label>
                <br />
                <input
                  type="text"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </p>
              <p>
                <label htmlFor="description">Description</label>
                <br />
                <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </p>
              <input className="btn btn-success" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductForm
