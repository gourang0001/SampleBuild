const express = require('express');
const router = express.Router();
const buildagainController = require('../controllers/buildagainController');
const multer = require('multer');
const path = require('path');

// Configure Multer for Docx storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'notes/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
            file.originalname.endsWith('.docx')) {
            cb(null, true);
        } else {
            cb(new Error('Only .docx files are allowed!'), false);
        }
    }
});

router.get('/buildagain', buildagainController.buildagain);
router.post('/devcheck', buildagainController.devcheck);
router.post('/storeinlocal', upload.single('data'), buildagainController.storeInLocal);

module.exports = router;
