
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require("passport");

const db = require('./db')
const postRouter = require('./routes/post-router')
const users = require("./routes/api/users");

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.use('/api', postRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
