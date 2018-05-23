express=require("express");
bodyParser=require("body-parser");
path=require('path');
db=require('./models/db');
app=express();
route=require('./routes/route')

// setting up midllewars
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',route);


const port=3031;

app.get('/',(req,res,next)=>{
	console.log("get //")
});

app.listen(port,()=>{

	console.log('listining')

})