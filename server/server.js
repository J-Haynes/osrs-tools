const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
const port = 4000

app.use(express.json())

const corsOptions = {
  origin: 'osrs.jackhaynes.dev',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}

app.use(cors(corsOptions))

app.get('/proxy', async (req, res) => {
  try {
    const response = await axios.get(
      'https://oldschool.runescape.com/slu?order=WMLPA'
    )
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' })
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
