const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("successfull dosto");
});

app.listen(PORT, () => {
  console.log("Server is running port: ", PORT);
});
