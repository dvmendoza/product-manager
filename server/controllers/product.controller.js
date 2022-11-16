const Product = require("../models/product.model")

module.exports = {
  index: (request, response) => {
    response.json({
      message: "Hello World!",
    })
  },
  createProduct: (request, response) => {
    Product.create({
      ...request.body,
    })
      .then((product) => response.json(product))
      .catch((err) => response.status(400).json(err))
  },
  getAllProducts: (request, response) => {
    Product.find()
      .then((products) => response.json(products))
      .catch((err) => response.status(400).json(err))
  },
  getProduct: (request, response) => {
    Product.findOne({ _id: request.params.id })
      .then((product) => response.json(product))
      .catch((err) => response.status(400).json(err))
  },
  updateProduct: (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedProduct) => response.json(updatedProduct))
      .catch((err) => response.status(400).json(err))
  },
  deleteProduct: (request, response) => {
    Product.deleteOne({ _id: request.params.id })
      .then((deleteConfirmation) => response.json(deleteConfirmation))
      .catch((err) => response.status(400).json(err))
  },
}
