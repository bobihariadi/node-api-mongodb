const express = require('express');
const router = express.Router();
const basicAuth = require('../utils/basic-auth');
const {MongoClient} = require('mongodb');
const config = require('../config/config')

const uri = config.uriMongo
const client = new MongoClient(uri);
const selectedDb = 'mydb'

router.get('/check_conn', (req, res, next) => {
    MongoClient.connect(uri, async (err, client) =>  {
        if (err) {
            throw err 
        } else {
            res.send('DB Connected');
        }
        client.close(); 
    }) 
});


router.get('/list', basicAuth, async (req, res, next) =>{
   const db = await (await client.connect()).db(selectedDb)

   db
   .collection('users')
   .find().toArray(async function (err, result) {
       if (err) throw err
       
       res.send(result);
       client.close();
    });      
})

router.post('/insert', basicAuth, async (req, res, next) =>{
    const db = await (await client.connect()).db(selectedDb)
 
    const result = await db.collection("users").insertOne(req.body);
    console.log(`New listing created with the following id: ${result.insertedId}`);  
    res.send(`${result.insertedId}`)   
 })

 router.patch('/update', basicAuth, async (req, res, next) =>{
     const db = await (await client.connect()).db(selectedDb)
     const result = await db.collection("users").updateOne({nama : req.body.nama}, {$set : req.body.updatelist});

     console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`); 
    res.send(`update : ${result.modifiedCount} rows`)    
 })

 router.delete('/delete', basicAuth, async (req, res, next) =>{
    const db = await (await client.connect()).db(selectedDb)
 
    const result = await db.collection("users").deleteOne({nama : req.body.nama});
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
    res.send(`deleted : ${result.deletedCount} rows`)   
 })

module.exports = router