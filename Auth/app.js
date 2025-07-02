const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.listen(port, () => {
  console.log("Servidor rodando na porta:", port);
});
