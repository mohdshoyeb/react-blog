const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://merndbuser:shoyeb1992@mernapp-f1h0b.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>console.log('DB connected')).catch((error)=>console.log(error));

app.get('/', (req, res)=>{
    res.send('hello Shoyeb')
});
app.listen(5000)