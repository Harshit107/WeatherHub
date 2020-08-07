const express = require('express')
const path = require('path')
const hbs = require('hbs')
const getLocation = require("./geoCode.js")
const getForcast = require("./forcast.js")
//loading express
const app = express()
const port = process.env.PORT || 3000

//public directiry path for server //-----server start from here 
const publicDirectory = path.join(__dirname,'../public')
const viewsDirectory = path.join(__dirname, '../templetes/views')
const partialsPath = path.join(__dirname, '../templetes/partials')


//setUp handelbar 
app.set('view engine', 'hbs')

//changing path to look views from current directory //---look file here for rendering
app.set('views',viewsDirectory );
hbs.registerPartials(partialsPath)

//setip static directory to serve to server
app.use(express.static(publicDirectory))

app.get('',(req,res)=>{

    //to send data 
   // res.send("Hello from homepage")

    //if we have file to display from view folder
    res.render('index')
})

app.get('/app',(req,res)=>{

    res.send("<h1>We are Working On It</h1>")
})

app.get('/about',(req,res)=>{

    res.send("<h1>We are Working On It</h1>")
})

//********      Weather         * */

app.get('/weather',(req,res)=> {

    const address = req.query.address;

    if(!address){
        return res.send("<h1>Error! No Search Provided</h1>")
    }
    getLocation(address,(error,{lat,long}={})=>{
        if(error){
            return res.send(error)
        }
        getForcast(lat,long,(error, report)=> {
            if(error){
                return res.send(error)
            }
            res.send(report)
        })
    })  
})
app.get('*',(req,res)=> {
    res.send('<h1>404 Page Not Found</h1>')
})
app.listen(port,()=> {
    console.log(`Server is up on ${port}`)
})