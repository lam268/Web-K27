const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
   res.sendFile(path.resolve(__dirname,'./public/service.html'));
});

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/about.html'));
 });

app.listen(3000,(error)=>{
    if(error)
        console.log(error);
    else
        console.log("Server is listen on port 3000...");
});