// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

 //deleteMany
//  db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
//      console.log(result);
//  });
 //deleteONe
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//     console.log(result);
// })
//  //findONe And Delete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {

//     console.log(result);
// })

// db.collection('Users').deleteMany({name: 'David'});

db.collection('Users').findOneAndDelete({_id: new ObjectID('5c2fc0bda75ac85cc0c7fb3a')
}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
});
    // db.close();
});