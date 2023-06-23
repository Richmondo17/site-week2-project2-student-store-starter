const app = require("./app")

// const db = require('./data/db.json')
// const app = require("./app")

// let products = [...db.products]

const port = process.env.PORT || 3001



//Start the server
app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port)
})
