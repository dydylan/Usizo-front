const express = require("express");
const app = express();
app.use(express.static("./dist/Usizo-front"));
app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/Usizo-front" });
});
app.listen(process.env.PORT || 8000);
console.log("App is running on port " + port);
//console.log(`Running on port ${process.env.PORT || 8080}`);