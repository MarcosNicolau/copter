const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const getChartData = require('./get-chart-data');
const getPriceData = require('./get-price-data');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);
app.use(cors());
app.use(express.json());
app.use(express({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

app.post('/get-chart-data', getChartData);
app.post('/get-price-data', getPriceData);

app.listen(PORT);
