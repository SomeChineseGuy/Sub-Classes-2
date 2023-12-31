const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8001;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});