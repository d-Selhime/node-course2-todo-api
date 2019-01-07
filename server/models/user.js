var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: { type:String,
           required: true,
           trim: true,
           minlength: 1
   
     }, completed: {
         type: Boolean,
         default: false
   
     }, completedAt: {
         type: Number,
         default: null
     }
   });
   
   var user = new User({
       email: 'dselhime@gmail.com',
   });
   
   user.save().then((doc) => {
       console.log(JSON.stringify(doc, undefined, 2));
   }, (e) => {
       console.log('Unable to create user', e);
   });

   module.exports = {User};