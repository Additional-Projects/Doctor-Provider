const express = require('express')
const app = express()
const axios = require('axios')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

const port = 5000

app.post('/', async (req, res) => {
  try {
    const { firstName, lastName, state, specialty } = req.body
    const data = await axios.get(
      `https://npiregistry.cms.hhs.gov/api/?version=2.0&first_name=${firstName}&last_name=${lastName}&state=${state}&taxonomy_description=${specialty}`,
    )
    const response = await res.json(data.data)
    return response
  } catch (error) {
    console.log(`Error: ${error}`)
  }
})

app.listen(port, () => console.log('Listening on Port: 5000'))
