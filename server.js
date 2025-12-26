const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 }
];

let cart = [];

app.get("/", (req, res)=> {
  res.send("Backend is running successfully");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/cart", (req, res) => {
  cart.push(req.body);
  res.json({ message: "Product added to cart" });
});

app.get("/cart", (req, res) => {
  res.json(cart);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
