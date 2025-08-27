const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')


app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


// routes
const userRoutes = require("./src/users/user.route")

app.use("/api/auth", userRoutes)








async function main() {
  await mongoose.connect(process.env.MONGODB_URI);


  app.get('/', (req, res) => {
  res.send('Full_stack e-commerce with_redux_state_management!')
})



}



main().then(()=>console.log("Mongobd Connencted Succesfully!!")).catch(err => console.log(err));












app.listen(port, () => {
  console.log(`Full_stack e-commerce with_redux_state_management ${port}`)
})
