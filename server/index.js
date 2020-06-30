const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const postRouter = require('./routes/post-router')

const app = express()
const apiPort = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDebe connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api', postRouter)

app.listen(apiPort, () => console.log(`Server running!!!!111! It is on port ${apiPort}`));