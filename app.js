const path = require('path')
const express = require('express')
const session = require('express-session')
const methodOverride = require('method-override')
const homeRouter = require('./routes/homeRouter')
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')
const cartRouter = require('./routes/cartRouter')
const apiRouter = require('./routes/apiRouter')

const app = express()

app.use(methodOverride('_method'))
app.use(express.static('public'))
// app.set('views', path.resolve(__dirname, './views'));
// app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(
  session({
    secret: 'ecommerce muambas',
    resave: false,
    saveUninitialized: true
  })
)

app.use(homeRouter)
app.use(userRouter)
app.use(cartRouter)
app.use(adminRouter)
app.use(apiRouter)

app.listen(3001, () => {
  console.log('Server online at http://localhost:3001')
})
