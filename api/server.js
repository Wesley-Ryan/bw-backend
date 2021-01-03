const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const Auth = require("./auth/auth-router");
const projectRouter = require("./projects/project-router");
const userRouter = require("./users/user-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan("common"));
server.use(express.json());

server.use("/account", Auth);
server.use("/projects", projectRouter);
server.use("/user", userRouter);

server.get("/", (_, res) => {
  res.send({ message: "API UP" });
});
module.exports = server;
