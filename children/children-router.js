const express = require("express");
const childrenModel = require("../children/children-model");
const foodModel = require("../food/food-model");

const router = express.Router({
    mergeParams: true,
})

router.get("/", async (req, res, next) => {
    try {
        const { id } = req.params
        const children = await childrenModel.findUserChildren(id)

        res.status(200).json(children)
    } catch(err) {
        res.status(404).json({ message: "Children not found"})
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const child = await childrenModel.findUsersChildById(id)

        res.status(200).json(child)
    } catch(err) {
        res.status(404).json({ message: "Child not found" })
    }
})

router.post("/", async (req, res, next) => {
    try {
        const body = req.body;
        const newChild = await childrenModel.addChild(body)
        res.status(201).json(newChild)
    } catch(err) {
        next(err)
      }
})

router.get("/:id/food", async(req, res, next) => {
    try {
        const food_items = await foodModel.getChildrenFoodItems()

        res.status(200).json(food_items)
    } catch(err) {
        next(err)
    }
})

router.get("/:id/food/:id", async(req, res, next) => {
    try {
        const { id } = req.params
        const food_item = await foodModel.getChildFoodItems(id)

        res.status(200).json(food_item)
    } catch(err) {
        next(err)
    }
})

router.delete("/:id", async(req, res) => {
    try {
    const { id } = req.params;
    const deleted = await childrenModel.removeChild(id)

    if(deleted) {
        res.status(200).json({ message: "Child successfully deleted" })
    } else { 
        res.status(404).json({ message: "Could not find child"})
    }
    } catch(err) {
        res.status(500).json({ message: "Failed to delete child" })
    }
})

module.exports = router;