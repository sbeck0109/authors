const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("established a connection");
  })
  .catch(() => {
    console.log("error...");
  });
