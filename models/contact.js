mongodb=require('mongoose');

const ContactSchema=mongodb.Schema({

	first_name:{
		type: String,
		required: true

	},
	last_name:{
		type: String,
		required: true

	},
	phone:{
		type: String,
		required: true

	}

})

const contact=mongodb.model('contact',ContactSchema);

module.exports=contact;