const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

module.exports = () => {
    return (req, res, next) => {
      try {
        const token = req.headers.authorization
        const decoded = jwt.verify(token, secrets.jwt)
        
        req.userId = decoded.subject
        next()
    } catch (err) {
      return res.status(401).json({ message: 'You are not authorized, please log in' });
      }
    }
  }