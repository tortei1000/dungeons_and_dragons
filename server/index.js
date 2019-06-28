const express = require('express')
require('dotenv').config()
const app = express()
const massive = require('massive')
const session = require('express-session')
const Auth_ctrl = require('./controllers/Auth_ctrl')
const Chars_ctrl = require('./controllers/Chars_ctrl')
const Edit_ctrl = require('./controllers/Edit_ctrl')


const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env



app.use(express.json())

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))

massive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
  console.log(`1- db is connected`)
  app.listen(SERVER_PORT, () => {
    console.log(`2-server is connected on ${SERVER_PORT}`)
  })
})

app.post('/auth/login', Auth_ctrl.login)
app.post('/auth/register', Auth_ctrl.register)
app.get('/auth/logout', Auth_ctrl.logout)
app.get('/auth/users', Auth_ctrl.getUsers)

app.get('/api/chars', Chars_ctrl.getAll)
app.post('/api/chars/', Chars_ctrl.newChar)
app.post('/api/character', Chars_ctrl.getOne)
app.post('/api/languages', Chars_ctrl.getOneLang)
app.post('/api/prof', Chars_ctrl.getOneProf)
app.post('/api/attacks', Chars_ctrl.getOneAttacks)
app.post('/api/dPack', Chars_ctrl.getOneDPack)
app.post('/api/outlander', Chars_ctrl.getOneOutlander)
app.post('/api/features', Chars_ctrl.getOneFeatures)

app.post('/api/charsInfo', Edit_ctrl.editCharInfo)
app.post('/api/attributes', Edit_ctrl.saveAtt)
app.post('/api/skills', Edit_ctrl.saveSkills)
app.post('/api/armor', Edit_ctrl.saveArmor)
app.put(`/api/attacks/:id`, Edit_ctrl.deleteAttacks)