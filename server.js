const express = require('express');
const app = express();
const buildagainRoutes = require('./routes/buildagainRoutes');

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/', buildagainRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
