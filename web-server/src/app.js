//______________________________________________________________________________//


const path = require('path')
// const path = require('node:path');
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast =require('./utils/forecast')

const { title } = require('process')



const app = express()
// Customizing the pblic directory
const publicDirectoryPath = path.join(__dirname, '../public')
// Customizing the view directory
const viewsPath = path.join(__dirname, '../templates/views')

// set up the partial directory globally
const partialsPath = path.join(__dirname, '../templates/partials')


// handlebars engine setup 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


//hbs.registerPartials(partialsPath)


//static directory setup 
app.use(express.static(publicDirectoryPath))



//-------------------> alll the callback (requests and resoponses) hbs <-----------------------------
app.get('', (req, res) =>{
    res.render('index', {
        title: 'Weather App',
        name: 'Baisil'

    })
        
})



app.get('/readme', ( req, res) => {
    res.render('readme',{
               name: 'Baisil'
    })
})


app.get('/readme', (req, res) => {
    res.send({
        
    })
    
})

app.get('/readme', (req, res)=>{
    if(!req.query.address){
        return res.send({
            error: 'Please provide a proper search word'
        })
    }
    res.send('It is readme page')
})

app.get('/weather', (req, res) =>{

    if(!req.query.address){
        return res.send({
            error: 'Please provide a proper search word'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location} = {})=> {
        if (error) {
            return res.send ({ error})
        }

        forecast(latitude, longitude, (error, forecastData) =>{
        if (error) {
            return res.send({error})
        }

        res.send({
            forecast: forecastData,
            location,
            address: req.query.address
        })

        })
    })
    // res.send('Your weather is here!')
})



app.get ('/products', (req, res) => {

    if (!req.query.search){
        return res.send({
            error: 'Please provide a proper search word'
        })
    } 

    console.log(req.query)
    res.send({
        products: []
    })
})
// other random route setting up says 404 error
app.get('*', (req, res) =>{
    res.send('My 404 page')
})

// port set up 
app.listen(3070, () => {
    console.log('Server is up of prot 3070')
})



