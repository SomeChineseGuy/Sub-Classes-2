const pg = require('pg');

const Client = pg.Client; // Single connection to my DB

const config = {
  host: 'localhost',
  port: 5432,
  database: 'movie_villains',
  user: 'alvinng',
  password: 'alvinng'
}

const client = new Client(config);

// establish a connection 
client.connect();

// Writing our first query - Browse



const verb = process.argv[2];

const id = process.argv[3];

switch(verb) {
  case 'browse': 
    client.query('SELECT * FROM movie_villains;')
    .then((res) => {
      console.log(res.rows);
      // Disconnect the connection
      client.end();
    }).catch(err => {
      console.log(err);
    })
  break
  case 'read': 
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id]).then((res) => {
      console.log(res.rows);
      client.end()
    })
  break;

  case 'edit':
    const newName = process.argv[4];
    client.query('UPDATE movie_villains SET villain = $1 WHERE id = $2;', [newName, id])
      .then(() => {
        console.log('villain updated successfully');
        client.end();
      });
  break;

  case 'add':
      const villianName = process.argv[3];
      const movieName = process.argv[4];
      const insertQuery = 'Insert INTO movie_villains(villain, movie) values($1, $2);';
      client.query(insertQuery, [villianName, movieName]).then((res) => {
        console.log('You have added it correctly!');
        client.end()
      })
  break;

  case 'delete':
      client.query('DELETE FROM movie_villains WHERE id = $1', [id]).then(() => {
        console.log('DELETED!')
        client.end();
      })
  break;

  default: 
    console.log('Please use a BREAD verb');
    client.end();
}


// BREAD
// Browse
// READ
// EDIT
// ADD
// DELETE

