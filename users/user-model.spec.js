const userModel = require("./user-model");
const db = require("../data/dbConfig");

beforeEach(async () => {
    await db.seed.run()
})

describe("User Model", () => {
    test("get Users", async() => {
        const res = await userModel.findUsers()
        expect(res.length).toBe(3)
    })
})