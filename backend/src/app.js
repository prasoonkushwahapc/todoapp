const express = require("express")
const cors = require("cors")

const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(cors())

// ROUTERS(APIs)
app.use("/api/todo", require("./routes/todo.routes"))

// SERVER HEALTH CHECK
app.get("/", async (req, res)=>{
    res.json({
        message:"server health is well"
    })
})

module.exports = app