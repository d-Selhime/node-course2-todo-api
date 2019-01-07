const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5c33dab9be650491a3a1878e';

// if (!ObjectID.isValid(id)) {
//     console.log('Id is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todos by ID', todo);
// }).catch((e) => console.log(e));


//User id
User.findById('5c338c825b9965cc90bb84db').then(() => {
    if (!user) {
        return console.log('Undable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
 console.log(e);
});