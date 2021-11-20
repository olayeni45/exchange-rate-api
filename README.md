# Exchange-Rate-Api
### Coding task from RobotsTech

This API accepts two currencies and returns the exchange rate for the currencies. <br />

### How to run it locally:
1. Clone the repo on your vscode terminal: `git clone https://github.com/olayeni45/exchange-rate-api.git` <br />
2. Install all the neccessary dependencies: `npm install` <br />
3. Start the server : `npm run dev` <br />

The server would run on port 3000. <br />
Make a post request to `http://localhost:3000/exchange-rate` with two variables in the form body as shown below <br />

```
{
  "currency1": "GBP",
  "currency2": "NGN"
}
```
This returns the exchange rate from **GBP** to **NGN** (Pounds to Naira)

### Response
```
{
  "rate": 552.010849
}

```

Click [here](https://olayeni45-exchange-rate-api.herokuapp.com/) to view the hosted version.
