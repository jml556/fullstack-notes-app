require('dotenv').config();
const express = require('express');
const connect = require('./mongodb/connection')
const notesRouter = require('./routes/noteRouter')
const usersRouter = require('./routes/userRouter')

console.log(typeof connect, 'connect')
connect()

const app = express();

app.use(express.json())

app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)

module.exports = app;
