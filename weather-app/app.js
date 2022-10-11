const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=bb967427ca1d10a7512acb3513713f69&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) =>{
  // console.log(response.body.current)
    console.log('it is currently' + response.body.current.temperature + 'degree out. there ' + response.body.current.feelslike)
})



// const request = require('request')

// const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
// })

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmFpc2lsZyIsImEiOiJjbDk0OWtuOGIxeXY4M29wMm5qM2E0OGg2In0.PW2snqOL_zUShGrs8PJhWQ'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})