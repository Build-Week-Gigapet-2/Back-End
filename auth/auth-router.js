const router = require("express").Router();
const bcrypt = require("bcryptjs");
const userModel = require("../users/user-model");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

router.post('/register', async (req, res, next) => {
    const { username, password } = req.body;
    
    try {
        const user = await userModel.findBy({ username }).first()
        
        if(!username || !password) {
            res.status(401).json({ message: "Username & Password Required" })
        } else if (user) {
            res.status(400).json({ message: "User already exists, please use a different username" })
        } else {
        const newUser = await userModel.addUser({ username, password })

        res.status(200).json({ message: `User successfully registered!`})
        }
    } catch(err) {
        res.status(500).json({ message: "Unable to register user" })
        next(err)
    }
  });

router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findBy({ username }).first();
        
        if(req.user) { 
            const passwordValid = bcrypt.compare(password, req.user.password);
            
            if(passwordValid) {
                const token = jwt.sign({
                    subject: user.id,
                    username: user.username,
                }, secrets.jwt, {
                    expiresIn: "365d",
                })
                
                res.status(200).json({ 
                    message: `Welcome ${username}`,
                    token 
                })
            } else {
                next({ status: 401, error: "Invalid Username or Password" })
            }
        } else {
            next({ status: 401, error: "User Does Not Exist" })
        }
    } catch(err) {
        next(err)
    }
})

module.exports = router;