const notesRouter = require('express').Router()

notesRouter.get('/', async (req, res) => {
  return res.json({
    message: 'succes received notes'
  })
})

module.exports = notesRouter