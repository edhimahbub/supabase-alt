const express = require('express')
const cors = require('cors')
require('dotenv').config()

const apiRoutes = require('./routes/api')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Supabase Alternative Demo Running')
})

app.use('/api', apiRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
