const app = require("./src/app")
require("dotenv").config()
const connectDB = require("./config/dbconnection")

// const app = express()
const PORT = process.env.PORT
connectDB()
app.listen(PORT, console.log("server is running on:", PORT))