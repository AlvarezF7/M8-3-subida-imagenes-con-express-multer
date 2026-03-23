const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 3000;


const uploadRoutes = require('./routes/uploadRoutes');


app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // servir imágenes

app.use('/', uploadRoutes);

// manejo de errores
app.use((err, _req, res, _next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ ok: false, mensaje: err.message });
  }
  if (err) {
    return res.status(415).json({ ok: false, mensaje: err.message });
  }
  res.status(500).json({ ok: false, mensaje: 'Error interno' });
});


app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});