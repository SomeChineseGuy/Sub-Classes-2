const axios = require('axios');

const catFact = axios.get('https://catfact.ninja/fact')
const coinDesk = axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
const bored = axios.get('https://www.boredapi.com/api/activity')

const apiRequest = [catFact, bored,coinDesk];

Promise.race(apiRequest)
  .then(res => {
    console.log(res.data);
    // console.log(res[1].data);
  })
  .catch(err => {
    console.log(err);
  })

