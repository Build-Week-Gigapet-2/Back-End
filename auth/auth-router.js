const router = require("express").Router();
const bcrypt = require("bcryptjs");
const userModel = require("../users/user-model");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

router.post('/register', async (req, res, next) => {
    try {
      const newUser = await userModel.addUser(req.body)
  
      res.status(201).json(newUser)
    } catch(err) {
      res.json(400).json({ message: "Failed to Register User, please try again later"})
    }
  });

router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findBy({ username }).first();
        
        if(user) { 
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