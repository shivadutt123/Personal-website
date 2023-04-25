const { MongoClient } = require('mongodb');
const { subscribe } = require('../routes');


module.exports={
  myFunction: function(result) {
 
  let acd=2
    return result
  },
    dispmsg:(messag,callback)=>{
        async  function  connect() {
            // Replace the connection string with your own
            const uri = 'mongodb://localhost:27017';
            
            // Create a new MongoClient
            const client = new MongoClient(uri);
            
            try {
              // Connect to the database
              await client.connect();
              
              // Do something with the database
              // const db = client.db('mydatabase');
              const collection = client.db('suiii').collection('example');
          
              // Insert a document
              result=await collection.insertOne(messag);
               console.log("connectedadfsadfa");
                this.products=await collection.find().toArray()
            
              callback(true,this.products)
              // Close the connection
              await client.close();
            } catch (err) {
              console.error(err);
            }
          }

          // connect();    
          connect()
    },
    showmsg : function async(callback){
      async  function  connect() {
        // Replace the connection string with your own
        const uri = 'mongodb://localhost:27017';
        
        // Create a new MongoClient
        const client = new MongoClient(uri);
        
        try {
          // Connect to the database
          await client.connect();
          
          // Do something with the database
           const db = client.db('mydatabase');
          const collection = client.db('suiii').collection('example');
      
          // // Insert a document
          // result=await collection.insertOne(messag);
           console.log("connectedadfsadfa");
            this.products=await collection.find().toArray()
          // console.log(this.products)
          callback(this.products)
          // Close the connection
          await client.close();
        } catch (err) {
          console.error(err);
        }
      }
      connect()
       
    }
}