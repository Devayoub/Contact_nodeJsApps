express=require('express');
route=express.Router()
const contact =require('../models/contact');
// retrieving contacts
route.get('/contact',(req,res,next)=>{
console.log('in contact route');
contact.find((err,contacts)=>{
		res.json(contacts)

})

});
// add contact
route.post('/contact',(req,res,next)=>{
	let newcontact =new contact({
		first_name: req.body.first_name,
		last_name:  req.body.last_name,
		phone: req.body.phone
	});

	 newcontact.save((err,contact)=>{
	 	if(err) {
	 		res.json({msg:"faild to add contact"});
	 	}
	 	else{
	 		res.json({msg:"Contact addes successfully"});
	 	}
	 })

});
// delete contact
route.delete('/contact/:id',(req,res,next)=>{
 contact.remove({_id: req.params.id},(err,rslt)=>{
 	if(err) {
 		res.json({msg:"fiald to delete contact"});
 	}
 	else {
 		res.json({msg:"Contact deleted successfully"});
 	}

 })


});

// modify contact
route.put('/contact/:id',(req,res,next)=>{
 contact.findByIdAndUpdate(req.params.id,{first_name:req.body.first_name,last_name:req.body.last_name,phone:req.body.phone},{},(err,rslt)=>{
 	if(err){
 		res.json({msg:"Faild to Update"});
 	}
 	else{
 		res.json({msg:"Updates Successfuly"})
 	}

 })


});










module.exports=route;