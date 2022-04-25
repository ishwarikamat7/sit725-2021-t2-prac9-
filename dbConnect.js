require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://ikamat7:shubhesh7@sit725.iw2ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(uri,{ useNewUrlParser: true })

client.connect((err,db) => {
     if(!err){
       console.log('Database Connected')
     }else{
       console.log('[error]',err)
     }
 });
 

exports.mongoClient = client;