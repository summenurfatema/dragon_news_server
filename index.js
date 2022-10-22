const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(cors())

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})