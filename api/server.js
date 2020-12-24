const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan("common"));
server.use(express.json());

server.get("/", (_, res) => {
  res.send({ message: "API UP" });
});
module.exports = server;
