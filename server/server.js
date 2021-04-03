const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const getChartData = require('./get-chart-data');
const getPriceData = require('./get-price-data');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser({ extended: true }));

const setCacheHeaders = () => {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
};

if (process.env.NODE_ENV === 'production') {
    app.use(
        express.static(path.join(__dirname, '..', 'client', 'build'), {
            maxAge: 31536000,
        })
    );
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
    });
}

app.post('/get-chart-data', getChartData);
app.post('/get-price-data', getPriceData);

app.listen(PORT);
