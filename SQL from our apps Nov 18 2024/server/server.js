const express = require('express');
const app = express();
const PORT = 8080;
const pg = require('pg');

const Client = pg.Client; // Single connection to my DB

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
}

const client = new Client(config);

// establish a connection 
client.connect();


app.get('/api/villains', (req, res) => {
  client.query('SELECT * FROM movie_villains;')
    .then((resp) => {
      console.log(resp.rows);
      const data = resp.rows
      res.send({data})
    }).catch(err => {
      res.send('err')
    })
})



app.get('/api/villains/:id', (req, res) => {
  const id = req.params.id;
  client.query('SELECT * FROM movie_villains where id = $1', [id])
    .then((resp) => {
      const data = resp.rows;
      res.send({data});
    }).catch((err) => {
      console.log(err);
      res.send("No Villains here")
    })
})

// for(let i = 0; i < 1000000; i++) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=calgary&appid=${process.env.API_KEY_WEATHER}`)
// }


app.listen(PORT, () => {
  console.log('Listening to port 8000!');
})