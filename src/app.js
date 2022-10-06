
const express = require("express");
const bodyParser =  require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile("/Users/anand/Desktop/bankin/public/firstPage.html");
});
app.get("/topics",function(req,res){
    res.sendFile("/Users/anand/Desktop/bankin/public/indexPage.html");
});
app.get("/square",function(req,res){
    res.sendFile("/Users/anand/Desktop/bankin/public/square.html");
});
app.get("/tables",function(req,res){
    res.sendFile("/Users/anand/Desktop/bankin/public/tables.html");
});
app.get("/cubes",function(req,res){
    res.sendFile("/Users/anand/Desktop/bankin/public/cubes.html");
});
app.get("/percentage",function(req,res){
    res.sendFile("/Users/anand/Desktop/bankin/public/percentage.html");
})

app.post("/tables",function(req,res){
    res.redirect("/Users/anand/Desktop/bankin/public/indexPage.html");

})
    


app.listen(3000 , function(){
    console.log("server running on 3000");
});