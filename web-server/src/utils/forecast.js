const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //https://weatherstack.com/dashboard 
    //userName:	BaisilGee
    const url = 'http://api.weatherstack.com/forecast/a35bcdd0659eb5744d3e3ef771a02e62/' + latitude + ',' + longitude

    

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Not able to connect to the WEATHERSTACK API!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast

