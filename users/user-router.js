const router = require("express").Router();
const usersModel = require("./user-model")

router.get("/", async (req, res, next) => {
    try {
        const users = await usersModel.findUsers()

        res.json(users)
    } catch(err) {
        next(err)
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