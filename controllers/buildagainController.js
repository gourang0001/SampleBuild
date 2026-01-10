const buildagain = (req, res) => {
    res.status(200).json({
        message: 'Successfully reached the /buildagain endpoint!',
        timestamp: new Date().toISOString()
    });
};

module.exports = {
    buildagain
};
