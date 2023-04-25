
var express = require('express');
const { setFlagsFromString } = require('v8');
var router = express.Router();
var flag;
let result;

// const { MongoClient } = require('mongodb');
// const { connect } = require('http2');

// // Replace the connection string with your own
// const uri = 'mongodb://localhost:27017/mydatabase';

// // Create a new MongoClient
// const client = new MongoClient(uri);
/* GET home page. */
// const MongoClient=require('mongodb').MongoClient
const { MongoClient } = require('mongodb');
const helper=require('../helpers/helper')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/submit',(req,res,next)=>{
  // res.render('admin/query')
  console.log('sui')
})
router.post('/submit',(req,res)=>{


  
// async function connect() {
//   // Replace the connection string with your own
//   const uri = 'mongodb://localhost:27017';
  
//   // Create a new MongoClient
//   const client = new MongoClient(uri);
  
//   try {
//     // Connect to the database
//     await client.connect();
    
//     // Do something with the database
//     // const db = client.db('mydatabase');
//     const collection = client.db('suiii').collection('example');

//     // Insert a document
//     this.result=await collection.insertOne(req.body);
//     console.log("connectedadfsadfa");
//     // Close the connection
//     await client.close();
//   } catch (err) {
//     console.error(err);
//   }
// }

// connect();

helper.dispmsg(req.body,(state,msg)=>{
console.log(msg)
return result
})

res.send("Thank you for contacting me")
// flag=result
//  console.log(flag)
})
//  console.log(flag)
router.get('/adminonly',(req,res)=>{
  // res.render('admin/query')
helper.showmsg((msg)=>{
  
  res.render('admin/query',{msg})
})

})

module.exports = router;
