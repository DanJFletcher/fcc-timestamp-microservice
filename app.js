var express = require('express')
var app = express()

const getTimeStamp = (req, res) => {
    let date

    if (!req.params.date) {
        date = new Date()
        const taco = { 
            unix: date.getTime(), 
            utc: date.toUTCString() 
        }
        console.log(taco)
        return res.json(taco)
    }

    date = !isNaN(req.params.date)
        ? new Date(Number(req.params.date))
        : new Date(req.params.date)

    const timeStamp = {
        unix: date.getTime(),
        utc: date.toUTCString()
    }
    console.log(timeStamp)

    res.json(timeStamp)
};

app.get('/api/:date?', getTimeStamp)

module.exports = {
    getTimeStamp,
    app
}