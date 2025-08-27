const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose');
require('dotenv').config()



async function main() {
  await mongoose.connect(process.env.MONGODB_URI);


}



main().then(()=>console.log("Mongobd Connencted Succesfully!!")).catch(err => console.log(err));











app.get('/', (req, res) => {
  res.send('Full_stack e-commerce with_redux_state_management!')
})

app.listen(port, () => {
  console.log(`Full_stack e-commerce with_redux_state_management ${port}`)
})
