var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

app.get('/' , function(req , res){

    console.log("api Called");
})

app.listen(port);
console.log('app is listening at port',port)
