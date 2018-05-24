express=require("express");
bodyParser=require("body-parser");
path=require('path');
db=require('./models/db');
app=express();
cors=require("cors");
route=require('./routes/route')

// setting up midellwars
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',route);
app.use(cors());

const port=3031;

app.get('/',(req,res,next)=>{
	console.log("get //")
});

app.listen(port,()=>{

	console.log('listining')

})