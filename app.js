// full-stack-open-pokedex/app.js
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001 // Updated to your port

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1') // Change this later to test new deployments
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error...  ')
  res.send('ok') // Fixed: 2 spaces indentation (same level as if)
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})