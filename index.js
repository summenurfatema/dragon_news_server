const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(cors())

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const categoryNews = news.filter(n => n.category_id === id);
    res.send(categoryNews)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})