const express = require("express");
const bodyParser = require("body-parser");
const categoryController = require("./controllers/CategoryController");

const app = express();
const port = process.env.port || 1337;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/categories", function(request, response) {
//   response.json({ Message: "Welcome Andrew" });
// });

app.listen(port, function() {
  console.log(`Server running on port ${port}`);
});
