const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas bağlantısını yapmak için URL gerekecek
// Şimdilik boş bırakalım veya ileride ekleriz.

app.get('/', (req, res) => {
  res.send('Backend çalışıyor!');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
