const express = require("express")
const cors = require("cors")
require("./server/config/mongoose.config")

const app = express()
// Middleware configuration
app.use(cors(), express.json(), express.urlencoded({ extended: true }))

require("./server/routes/product.routes")(app)

const dotenv = require("dotenv")
dotenv.config()

const colors = require("colors")
colors.enable()

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
  console.log(`You are listening on port ${server.address().port}`.cyan)
})
