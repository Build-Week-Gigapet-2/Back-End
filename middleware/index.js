const userModel = require("../users/user-model");

function sanityCheck(req, res, next) {
    res.json({ message: "Welcome to the Gigapets API" })
}

function wrongRoute(req, res, next) {
    res.status(401).json({ error: "Route does not exist" });
}

function errorHandler(err, req, res, next) {
    console.log("Global Error:", err);
    res.status(err.status || 500);
    delete err.status;
    res.json({ message: err.message, err })
}

function checkUserExistance(req, res, next) {
    const { username, password } = req.body;
    if(!username || !password) {
        next({ status: 400, error: "Username and Password Required" });
    } else {
        next();
    }
}

async function usernameExists(req, res, next) {
    const { username } = req.body;
    const user = await userModel.findBy({ username });
    req.user = user;
    next();
}

function redirectLogin(req, res, next) {
        if(!req.session.accessToken) {
            res.redirect('/login');
        } else {
            next();
        }
}

module.exports = {
    sanityCheck,
    wrongRoute,
    errorHandler,
    checkUserExistance,
    usernameExists,
    redirectLogin,
}