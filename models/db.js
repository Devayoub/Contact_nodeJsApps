const db=require('mongoose');

db.connect("mongodb://localhost:27017/contactlist");

db.connection.on("connected",()=>{

	console.log('connection established successfully');
});
db.connection.on("error",(err)=>{

	console.log('connection established error');
});



module.exports=db;