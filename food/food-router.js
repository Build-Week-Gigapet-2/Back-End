const express = require("express");
const foodModel = require("./food-model");

const router = express.Router({
    mergeParams: true,
})

router.get("/", async(req, res, next) => {
    try {
        const food_items = await foodModel.getAllChildrensFoodItems()

        res.status(200).json(food_items)
    } catch(err) {
        next(err)
    }
})

module.exports = router;