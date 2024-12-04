const express = require("express");
const app = express();
const port = 3000;

// Definir o array de produtos fora das rotas
let products = [
  { id: 1, name: "Notebook", price: 3500 },
  { id: 2, name: "Smartphone", price: 5000 },
];


app.get("/products", (req, res) => {
  res.json(products);
});


app.use(express.json());

app.post("/products", (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct); 
  res.status(201).json(newProduct); 
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API está rodando em  http://localhost:${port}`);
});