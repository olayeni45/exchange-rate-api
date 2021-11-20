import axios from 'axios'

const getSymbols = async () => {
    try {
        const result = await axios({
            method: 'GET',
            url: `http://data.fixer.io/api/symbols?access_key=${process.env.SYMBOLS_API_KEY}`,
            headers: {
                ContentType: 'application/json'
            }
        })

        const symbols = Object.keys(result.data.symbols)
        return symbols

    } catch (error) {
        return [false, error.response.statusText]
    }
}

var currencySymbols = []

const ExchangeCurrency = async ({
    currency1,
    currency2
}) => {
    try {

        if (currencySymbols.length === 0) {
            currencySymbols = await getSymbols()
        }

        const firstIndex = currencySymbols.indexOf(currency1)
        const secondIndex = currencySymbols.indexOf(currency2)

        if (firstIndex !== -1 && secondIndex !== -1) {

            const result = await axios({
                method: 'GET',
                url: `${process.env.BASE_URL}?api_key=${process.env.API_KEY}&base_currency=${currency1}`,
                headers: {
                    ContentType: 'application/json'
                }
            })

            return [true, result.data.data[currency2]]
        }
        else {
            return [false, "Please provide a valid currency"]
        }

    } catch (error) {
        return [false, error.response.statusText ]
    }
}

export default ExchangeCurrency