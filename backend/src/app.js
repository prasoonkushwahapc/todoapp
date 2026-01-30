const express = require("express");
const cors = require("cors");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(
  cors({
    origin: ["http://127.0.0.1:3000", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

// ROUTERS(APIs)
app.use("/api/todo", require("./routes/todo.routes"));

// SERVER HEALTH CHECK
app.get("/", async (req, res) => {
  res.json({
    message: "server health is well",
  });
});

module.exports = app;
