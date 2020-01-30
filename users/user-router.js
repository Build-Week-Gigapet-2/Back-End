const express = require("express")
const usersModel = require("./user-model");
const foodRouter = require("../food/food-router");
const router = express.Router()

router.use("/:id/food", foodRouter)

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

router.get("/:id/children", async (req, res, next) => {
    try {
        const { id } = req.params
        const children = await usersModel.findUserChildren(id)

        res.status(200).json(children)
    } catch(err) {
        res.status(404).json({ message: "Children not found"})
    }
})

router.delete("/:id", (req,res) => {
    try {
    const { id } = req.params;
    
    const deleted = usersModel.removeUser(id);

    if(deleted) {
        res.json({ message: "User was successfully removed from the database."})
    } else {
        res.status(404).json({ message: "Could not find User" })
    }

    } catch(err) {
        res.status(500).json({ message: "Failed to remove User" })
    }
})

module.exports = router;