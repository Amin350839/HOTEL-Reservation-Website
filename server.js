const express = require('express');
const path = require('path');
const app = express();

// Middleware pour servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Exemple d'API backend (GET)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);
// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
