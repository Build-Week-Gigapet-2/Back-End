const express = require("express")
const usersModel = require("./user-model");
const childrenRouter = require("../children/children-router");
const router = express.Router()

router.use("/:id/children", childrenRouter)

router.get("/", async (req, res, next) => {
    try {
        const users = await usersModel.findUsers()

        res.json(users)
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await usersModel.findUserById(id)

        res.status(200).json(user)
    } catch(err) {
        res.status(404).json({ message: "User not found"})
    }
})

module.exports = router;