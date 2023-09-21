const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


const app = express();

app.use(express.json);
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listen to port ${port}...`));