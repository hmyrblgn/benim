const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let users = [
  { id: 1, name: 'Ali', email: 'ali@example.com' },
  { id: 2, name: 'Ayşe', email: 'ayse@example.com' }
];

// Tüm kullanıcıları getirme
app.get('/users', (req, res) => {
  res.json(users);
});

// Yeni kullanıcı ekleme
app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`User service running on port ${port}`);
});