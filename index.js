const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json")
const data = require('./data/data.json')

app.get('/', (req, res) => {
    res.send('learning website is runing')
})

app.get('/course-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`learning website is running on port,${port}`);
})