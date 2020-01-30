module.exports = {
    jwt: process.env.JWT_SECRET || "This is a secret",
    port: process.env.PORT || 5000,
    environment: process.env.NODE_ENV || "dev"
};