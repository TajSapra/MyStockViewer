const stockData = require("../models/stockData");
const http = require('https');

const getLiveData = (key) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            hostname: 'yahoo-finance15.p.rapidapi.com',
            port: null,
            path: `/api/v1/markets/quote?ticker=${key}&type=STOCKS`,
            headers: {
                'x-rapidapi-key': '401b96d65cmsh02c8fbb206b8694p1731dcjsnd358023152dc',
                'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com'
            }
        };

        const req = http.request(options, function (res) {
            const chunks = [];

            res.on('data', function (chunk) {
                chunks.push(chunk);
            });

            res.on('end', function () {
                const body = Buffer.concat(chunks);
                resolve(body.toString());
            });

            res.on('error', function (error) {
                reject(error);
            });
        });

        req.end();
    });
}

const fetchDataAndUpdateInDb = () => {
    const keys = ['AAPL', 'MSFT', 'TSLA', 'NVDA', 'AMZN'];
    let promiseCalls = keys.map(currKey => getLiveData(currKey));
    
    Promise.all(promiseCalls)
        .then(results => {
            results.forEach((result, index) => {
                const resultJSON =JSON.parse(result)||{}
                const priceData = ((resultJSON.body||{}).primaryData||{}).lastSalePrice
                const key = keys[index]
                const dateTime = Date.now()
                const createdData = stockData.create({
                    Date:dateTime,
                    price: priceData,
                    companyKey: key
                })
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

module.exports = { fetchDataAndUpdateInDb };
