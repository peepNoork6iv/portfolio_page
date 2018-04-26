var express = require("express"),
    app     = express();
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Landing page
app.get("/", function(req, res){
    res.render("landing");
});

// Eesti keelne portfolio
app.get("/ET", function(req, res){
    res.render("index_ET");
});

// English portfolio
app.get("/EN", function(req, res){
    res.render("index_EN");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("SERVER IS ON!!");
});