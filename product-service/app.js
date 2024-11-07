const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

let products = [
  { id: 1, name: 'Laptop', price: 3000 },
  { id: 2, name: 'Phone', price: 1500 }
];

// Tüm ürünleri getirme
app.get('/products', (req, res) => {
  res.json(products);
});

// Yeni ürün ekleme
app.post('/products', (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Product service running on port ${port}`);
});
