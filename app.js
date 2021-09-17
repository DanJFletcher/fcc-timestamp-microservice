var express = require('express')
var app = express()

const getTimeStamp = (req, res) => {
    const date = new Date(req.params.time)
    res.json({
        unix: Math.round(date.getTime() / 1000).toString(),
        utc: date.toUTCString()
    })
};
app.get('/api/:time', getTimeStamp)

module.exports = {
    getTimeStamp,
    app
}