//
const path = require('path');
const fs = require('fs');
const multer = require('multer');

// carpeta uploads
const UPLOAD_DIR = path.join(__dirname, '../uploads');

// crear carpeta si no existe
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// almacenamiento
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}${ext}`);
  }
});

// filtro MIME
const fileFilter = (_req, file, cb) => {
  const allowed = /image\/(jpeg|png|gif)/.test(file.mimetype);
  allowed
    ? cb(null, true)
    : cb(new Error('Tipo de archivo no permitido'));
};

// configuración final
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter
});

module.exports = upload;