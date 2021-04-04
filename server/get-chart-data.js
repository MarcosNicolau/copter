const fetch = require('node-fetch');

const getChartData = async (req, res) => {
    const { crypto, timestamp } = req.body;
    const endpoint = `https://api.nomics.com/v1/currencies/sparkline?key=${process.env.NOMICS_KEY}&ids=${crypto}&start=${timestamp}T00%3A00%3A00Z`;
    const data = await fetch(endpoint);
    const parsedData = await data.json();
    const timestamps = parsedData[0].timestamps.map((timestamp) =>
        new Date(timestamp).toDateString()
    );
    res.send({ prices: parsedData[0].prices, timestamps });
};

module.exports = getChartData;
