const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir les fichiers statiques (CSS, JS, images)
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes pour chaque page HTML existante
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/index.html'));
});

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/about.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/index.html'));
});

app.get('/allproducts.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/allproducts.html'));
});

app.get('/article.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/article.html'));
});

app.get('/categorie.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/categorie.html'));
});

app.get('/confirmation.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/confirmation.html'));
});

app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/contact.html'));
});

app.get('/favorite.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/favorite.html'));
});

app.get('/licence.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/licence.html'));
});

app.get('/paiement.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/paiement.html'));
});

app.get('/panier.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/panier.html'));
});

app.get('/promotions.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/promotions.html'));
});

app.get('/recherche.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/templates/recherche.html'));
});


// Routes API
const productsRoutes = require('./routes/products');
app.use('/api', productsRoutes);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur lancé : http://localhost:${port}`);
});
