const express = require("express");
const server = express();
const router = require("../sports/sport-router");

server.use(express.json());
server.use("/api/sports", router);

module.exports = server;
