const express = require('express');
const { log } = require('node:console');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello World");
})

app.listen(3000);