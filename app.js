const express = require('express')
const app = express()
const port = 3000

const userRouter = require('./routers/userRouter')
const drugRouter = require('./routers/drugRouter')

app.get('/', (req, res) => res.render('home'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use('/user', userRouter)
app.use('/drug', drugRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))