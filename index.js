const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('learning website is runing')
})


app.listen(port, () => {
    console.log(`learning website is running on port,${port}`);
})