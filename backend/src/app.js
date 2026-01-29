const express = require("express")

const app = express()

// MIDDLEWARES
app.use(express.json())

// ROUTERS(APIs)

// SERVER HEALTH CHECK
app.get("/", async (req, res)=>{
    res.json({
        message:"server health is well"
    })
})

module.exports = app