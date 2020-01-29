const server = require("./api/server");
const PORT = process.env.PORT || 5000;

if(!module.parent) {
    server.listen(PORT, () => {
        console.log(`\n Server listening on localhost:${PORT} \n`)
    })
}