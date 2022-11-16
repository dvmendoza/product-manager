const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: [3, "Title must be at least 3 characters"],
      required: [true, "Title is required"],
    },
    price: {
      type: [Number, "Price must be a number"],
      min: [0, "Price must be positive"],
      required: [true, "Price is required"],
    },
    description: {
      type: String,
      minlength: [3, "Description must be at least 3 characters"],
      required: [true, "Description is required"],
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Product", ProductSchema)
