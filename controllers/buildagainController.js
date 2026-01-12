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

module.exports = {
    buildagain,
    devcheck,
    storeInLocal
};
