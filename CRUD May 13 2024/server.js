const express = require('express');
const PORT = 9001;
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

// Set the view engine
app.set('view engine', 'ejs');

// Turn on the user input via the form
app.use(express.urlencoded({extended: false}))

/*
- Spcy Chicken Sandwich
- Fries
- Coke

- Pizza Sub
- POUTINE
- Gin and Tonic

- Double Cheese Burger
- Onion Rings
- Chocolate Shake
*/

const combos = {
  1: {
    main: 'Spicy Chicken Sandwich',
    side: 'Fries',
    drink: 'Coke'
  },
  2: {
    main: 'Pizza Sub',
    side: 'Poutine',
    drink: 'Gin Tonic'
  },
  3: {
    main: 'Double Cheese Burger',
    side: 'Onion Rings',
    drink: 'Chocolate Shake'
  }
}

app.get('/', (req, res) => {
  const templeVars = {
    combos
  }
  res.render('index', templeVars)
})

app.get('/combo/add', (req, res) => {
  res.render('add')
})

app.get('/combo/:id', (req, res) => {
  const userInput = req.params.id;
  if(combos[userInput]) {
    const templeVars = {
      combo: combos[userInput]
    }
    return res.render('combo', templeVars)
  }

  res.send('wrong combo!')
})

// What is restful
// Get Request
// Post Request - For adding data
// Put Request - Updating Data
// Patch Request - Updating Data (smaller amount)
// Delete Request - Delete Data


// {} => []
// {key: value} Object.keys => [key]
// {key: value} Object.values => [value]
// {key: value} Object.entries => [key, values]

app.post('/combo/new', (req, res) => {
  const keys = Object.keys(combos)
  const currentMenuItem = keys[keys.length - 1]
  const newMenuNumber = Number(currentMenuItem) + 1
  combos[newMenuNumber] = req.body;
  res.redirect('/')
})

app.post('/combo/:id/delete', (req, res) => {
  const userInput = req.params.id;
  delete combos[userInput]
  res.redirect('/')
})

app.post('/combo/:id/edit', (req, res) => {
  const userInput = req.params.id;
  const newItems = req.body;
  combos[userInput] = newItems;
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})