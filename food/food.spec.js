const foodModel = require("./food-model");
const db = require("../data/dbConfig");

beforeEach(async () => {
    await db.seed.run()
})

describe("Food Model", () => {
    test("get Children Food Items", async() => {
        const res = await foodModel.getChildrenFoodItems(1)
        expect(res.length).toBeGreaterThan(0)
    })

    test("get Child Food Item", async() => {
        const res = await foodModel.getFoodItems(1)
        expect(res).toBeDefined() 
        
    })
})