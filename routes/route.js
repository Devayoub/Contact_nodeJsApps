express=require('express');
route=express.Router()

// retrieving contacts
route.get('/contact',(req,res,next)=>{
console.log('in contact route');
res.send('you are in root dir');

});
// add contact
route.post('/contact',(req,res,next)=>{
//add contact code

});
// delete contact
route.delete('/contact/:id',(req,res,next)=>{
//delete contacts code


});

// modify contact
route.put('/contact/:id',(req,res,next)=>{
//modify contacts code


});










module.exports=route;