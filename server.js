const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/route");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

const port = 3000;

app.listen(process.env.PORT || port, err => {
  if (err) {
    console.log("unable to start the server!");
  } else {
    console.log(`server started on port ${port}`);
  }
});
