const userModel = require("./user-model");
const db = require("../data/dbConfig");

beforeEach(async () => {
    await db.seed.run()
})

describe("User Model", () => {
    test("get Users by id", async() => {
        const res = await userModel.findUserById(1)
        expect(res.username).toBe("test1")
    })
})