var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes

app.listen(PORT, ()=>{
    console.log(`server listening on: http://localhost:${PORT}`)
})