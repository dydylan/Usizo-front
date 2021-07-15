const express = require("express");
const app = express();
app.use(express.static("./dist/Usizo-front"));
app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/Usizo-front" });
});
http.listen((process.env.PORT || 5000), function(){
    console.log('listening on *:5000');
});


//app.listen(process.env.PORT || 8080);
//console.log(`Running on port ${process.env.PORT || 8080}`);