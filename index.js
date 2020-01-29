const server = require('./api/server.js');
require("dotenv").config()
const PORT = process.env.PORT || 3300;

if(!module.parent) {
    server.listen(PORT, () => {
        console.log(`\n Server listening on localhost:${PORT} \n`)
    })
}