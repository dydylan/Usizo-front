const express = require("express");
const app = express();
app.use(express.static("./dist/Usizo-front"));
app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/Usizo-front" });
});
const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log("App is running on port " + port);
});

//app.listen(process.env.PORT || 8080);
//console.log(`Running on port ${process.env.PORT || 8080}`);