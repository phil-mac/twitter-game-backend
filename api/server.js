const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')

const authRouter = require('../auth/auth-router')
const tweetsRouter = require('../tweets/tweets-router')
const authenticate = require('../auth/authenticate-middleware')

const server = express()

server.use(helmet())
server.use(cors());
server.use(express.json())

server.use(
    session({
        name: 'session1',
        secret: 'psst, this is a secret',
        cookie: {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            secure: false,
        },
        httpOnly: true,
        resave: false,
        saveUninitialized: false,
    })
)

server.use('/api/auth', authRouter);
server.use('/api/tweets', authenticate, tweetsRouter);
// server.use('/api/tweets', tweetsRouter);

server.use((err, req, res, next) => {
    console.log(err);
    res.json({message: "error!!!"})
})

module.exports = server;