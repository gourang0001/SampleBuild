const buildagain = (req, res) => {
    res.status(200).json({
        message: 'Successfully reached the /buildagain endpoint!',
        timestamp: new Date().toISOString()
    });
};

const axios = require('axios');

const devcheck = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:7000/api/approach-note/generate', req.body);
        res.status(200).json({
            message: 'Successfully called generate API',
            data: response.data
        });
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json({
            message: 'Error calling generate API',
            error: error.message
        });
    }
};

const storeInLocal = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    res.status(200).json({
        message: 'File stored successfully in local folder',
        file: req.file.filename,
        path: req.file.path
    });
};

const fs = require('fs');
const path = require('path');

const listFiles = (req, res) => {
    const directoryPath = path.join(__dirname, '../notes');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Unable to scan files', error: err });
        }
        res.status(200).json({ files });
    });
};

module.exports = {
    buildagain,
    devcheck,
    storeInLocal,
    listFiles
};
