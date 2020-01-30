const express = require("express");
require("dotenv").config()
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/user-router");
const foodRouter = require("../food/food-router");

const authenticate = require("../auth/authenticate-middleware.js");
const {
    sanityCheck,
    wrongRoute,
    errorHandler,
    checkUserExistance,
    usernameExists
} = require("../middleware")

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/api/auth", checkUserExistance, usernameExists, authRouter);
server.use("/api/users", authenticate(), usersRouter);
server.use("/api/food", foodRouter);

server.get('/', sanityCheck)
server.use(wrongRoute)
server.use(errorHandler)

module.exports = server;