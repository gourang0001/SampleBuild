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

module.exports = {
    buildagain,
    devcheck
};
