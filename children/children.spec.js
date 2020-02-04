const childrenModel = require("./children-model");
const db = require("../data/dbConfig");

beforeEach(async () => {
    await db.seed.run()
})

describe("Children's Model", () => {
    test("find Children", async() => {
        const res = await childrenModel.find(1)
        expect(res).toHaveLength(2)
    })

    test("find Child By Id", async() => {
        const res = await childrenModel.findById(1)
        expect(res.child).toBe("child_1") 
    })

    test("Add child", async() => {
        await childrenModel.add({ name: "Bobby", user_id: 2 })
        const children = await db("children").select()
        expect(children).toHaveLength(5)
    })
})