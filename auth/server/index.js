const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3090;

// DB Setup
mongoose.connect("mongodb://127.0.0.1:27017/auth");

// App Setup
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Express Setup
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
