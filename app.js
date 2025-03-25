// full-stack-open-pokedex/app.js
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001 // Updated to your port

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('2') // Updated to confirm new deployment
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})