import express from 'express'
import exchange  from '../controller/exchange.js'

const router = express.Router()

router.post('/exchange-rate', exchange.GetRate)

export default router