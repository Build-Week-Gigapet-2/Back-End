const sessionConfig = {
    name: "giganotosaurus",
    secret: process.env.SECRET || "your gigapet is watching you",
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
      httpOnly: false,
    },
    resave: false,
    saveUninitialized: true,
  };
  
  module.exports = { sessionConfig };