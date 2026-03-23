function subirImagen(req, res) {
  if (!req.file) {
    return res.status(400).json({
      ok: false,
      mensaje: 'No se recibió imagen válida'
    });
  }

  res.status(201).json({
    ok: true,
    mensaje: 'Imagen subida correctamente',
    archivo: req.file.filename,
    ruta: `/uploads/${req.file.filename}`
  });
}

module.exports = {
  subirImagen
};