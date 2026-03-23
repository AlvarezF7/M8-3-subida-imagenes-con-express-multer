const express = require('express');
const router = express.Router();

const upload = require('../models/uploadModel');
const { subirImagen } = require('../controllers/uploadController');

router.post('/upload', upload.single('foto'), subirImagen);

module.exports = router;