const buildagain = (req, res) => {
    res.status(200).json({
        message: 'Successfully reached the /buildagain endpoint!',
        timestamp: new Date().toISOString()
    });
};

const devcheck = (req, res) => {
    const { message } = req.body;
    res.status(200).json({
        receivedMessage: message || 'No message provided',
        status: 'success'
    });
};

module.exports = {
    buildagain,
    devcheck
};
