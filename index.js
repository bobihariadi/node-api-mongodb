const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const mongoRoute = require('./routes/mongodbRouter');

const port = process.env.APP_PORT || 3000
const hostname = process.env.APP_HOST || 'localhost'

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

const test = new Promise((resolve,reject)=>{
    setTimeout(function() {
        resolve("tiga")
      },3000)
})

const test1 = new Promise((resolve,reject)=>{
    setTimeout(function() {
        resolve("lima")
      },5000)
})

let hallo = (async()=>{
    console.log(await test)
    console.log(await test1)
    console.log('bbb')
})()


app.use('/mongo', mongoRoute);

app.listen(port, hostname, () => {
    console.log(`App listening at http://${hostname}:${port}`)
});
