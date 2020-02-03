const express = require("express")
const foodModel = require("./food-model")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const food_items = await foodModel.getAllFoodItems()

        res.status(200).json(food_items)
    } catch(err) {
        next(err)
    }
})

router.get("/c", async (req, res, next) => {
    try {
        const food_cat = await foodModel.getFoodCategory()

        res.status(200).json(food_cat)
    } catch(err) {
        next(err)
    }
})

router.get("/c/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const food_cat = await foodModel.getCategoryById(id)

        if(food_cat) {
        res.status(200).json(food_cat)
        } else {
        res.status(404).json({ message: "Category not found"})
        }
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const food_item = await foodModel.getFoodItemById(id)

        res.status(200).json(food_item)
    } catch(err) {
        res.status(404).json({ message: "Food item not found" })
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const food_item = await foodModel.addFoodItem(req.body)
        res.status(201).json(food_item)
    } catch(err) {
        next(err)
    }
})

router.post("/c", async (req, res, next) => {
    try {
        const food_cat = await foodModel.addCategory(req.body)
        res.status(201).json(food_cat)
    } catch(err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
      const { id } = req.params
      const updatedFood = await foodModel.updateFoodItem(id)

      if(updatedFood) {
      res.status(200).json(updatedFood)
      } else if(obj === null) {
          res.status(400).json({ message: "Food item returning undefined" })
      }
    } catch(err) {
      res.status(500).json({ message: "Failed to update food item" })
      next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await foodModel.delFoodItem(id)

        if(!deleted) {
            res.status(500).json({ message: "Food item not found" })
        } else {
        res.status(200).json({ message: "Food item successfully deleted" })
        }
    } catch(err) {
        res.json({ message: "Failed to delete food item" })
        next(err)
    }
})

module.exports = router;