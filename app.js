const express = require('express')
const app = express()
const port = 3500
const session = require('express-session')
const bcrypt = require('bcrypt')


const userRouter = require('./routers/userRouter')
const drugRouter = require('./routers/drugRouter')
const loginRouter = require('./routers/loginRouter')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => res.render('home'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use('/user', userRouter)
app.use('/drug', drugRouter)


app.use('/login', loginRouter)
app.get('/test', (req,res)=>{
    res.render('transaction')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))