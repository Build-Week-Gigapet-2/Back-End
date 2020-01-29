const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.get('/', (req, res, next) => {
    res.json({
        message: "Welcome to the Gigapets API"
    })
})

server.use((err, req, res, next) => {
    console.log("Error:", err)

    res.status(500).json({
        message: "There was a problem with the server..."
    })
})

module.exports = server;