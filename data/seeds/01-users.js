const bcrypt = require("bcryptjs")
const hash = async(password) => await bcrypt.hash(password, 12)

exports.seed = async function(knex) {
  await knex("users").del()
  await knex("users").insert([
    { username: "test1", password: `${await hash("abc123")}`},
    { username: "test2", password: `${await hash("def456")}`},
    { username: "test3", password: `${await hash("hij789")}`},
  ])
};