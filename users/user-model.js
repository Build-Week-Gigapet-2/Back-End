const db = require("../data/dbConfig")
const bcrypt = require ("bcryptjs")

function findUsers() {
    return db("users");
}

function findBy(filter) {
    return db("users")
        .where(filter)
        .select("username", "password");
}

function findUserById(id) {
    return db("users").where({ id }).first();
}

async function addUser(user) {
    const salt = await bcrypt.genSalt(14)
    const hashedPass = await bcrypt.hash(user.password, salt)
    user.password = hashedPass;

    const [id] = await db("users").insert(user)

    return findUserById(id);
}

module.exports = {
    findUsers,
    findBy,
    findUserById,
    addUser,
}