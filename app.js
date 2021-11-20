import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/routes.js'

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())

app.use('/', router)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', '*')
    next()
})

const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`Server listening on port ${port}`)
)