const buildagain = (req, res) => {
    res.status(200).json({
        message: 'Successfully reached the /buildagain endpoint!',
        timestamp: new Date().toISOString()
    });
};

const devcheck = (req, res) => {
    res.status(200).json({
        receivedData: req.body,
        status: 'success'
    });
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
