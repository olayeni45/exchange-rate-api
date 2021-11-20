import ExchangeCurrency from '../services/exchange.js'

const GetRate = async (req, res) => {
    const currency1 = req.body.currency1
    const currency2 = req.body.currency2

    const rate = await ExchangeCurrency({ currency1, currency2 })
    if (rate[0]) {
        return res.status(200).json({ rate: rate[1] })
    }
    else {
        return res.status(400).json({ error: rate[1] })
    }
}

export default { GetRate }