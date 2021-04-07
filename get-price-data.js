const fetch = require('node-fetch');

const getPriceData = async (req, res) => {
    const cryptoPair = req.body.cryptoPair;
    const endpoint = `https://exchange-data-service.cryptosrvc.com/v1/quotes?exchange=COPTER`;
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const pair = data.find((crypto) => crypto.pair === cryptoPair);
        res.send(pair);
    } catch (err) {
        res.status(503).send('Couldn not get the data');
    }
};

module.exports = getPriceData;
