var express  = require('express');
var data = require('./data/test.json');

var app = express();
const PORT = 3000;

//this is how a route is built in Express
app.get('/', (req,res)=>{
//res.send(`App is running on port ${PORT}`);
  res.json(data);
});

app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
  //console.log(data);
});
