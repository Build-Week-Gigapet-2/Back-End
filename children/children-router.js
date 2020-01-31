const express = require("express");
const childrenModel = require("../children/children-model");
const foodModel = require("../food/food-model");

const router = express.Router({
    mergeParams: true,
})

router.get("/", async (req, res, next) => {
    try {
        const { id } = req.params
        const children = await childrenModel.find(id)

        res.status(200).json(children)
    } catch(err) {
        res.status(404).json({ message: "Children not found"})
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const child = await childrenModel.findById(id)

        res.status(200).json(child)
    } catch(err) {
        res.status(404).json({ message: "Child not found" })
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const body = req.body;
        const newChild = await childrenModel.add(body)
        res.status(201).json(newChild)
    } catch(err) {
        res.json(400).json({ message: "Failed to add new child" })
        next(err)
      }
})

router.get("/:id/food", async(req, res, next) => {
    try {
        const { id } = req.params;
        const food_items = await foodModel.getChildrenFoodItems(id)

        res.status(200).json(food_items)
    } catch(err) {
        next(err)
    }
})

router.get("/:id/food/:id", async(req, res, next) => {
    try {
        const { id } = req.params
        const food_item = await foodModel.getFoodItems(id)

        res.status(200).json(food_item)
    } catch(err) {
        next(err)
    }
})

router.delete("/:id", async(req, res) => {
    try {
    const { id } = req.params;
    const deleted = await childrenModel.remove(id)

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