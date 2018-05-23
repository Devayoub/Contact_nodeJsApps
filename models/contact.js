mongodb=require('mongoose');

const ContactSchema=mongodb.Schema({

	first_name:{
		type:string,
		required:true

	},
	last_name:{
		type:string,
		required:true

	},
	phone:{
		type:string,
		required:true

	}

})

const Contact=mongodb.model('contact',ContactSchema);

module.exports=Contact;