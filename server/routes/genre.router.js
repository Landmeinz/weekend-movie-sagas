const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')




// GET genres; include the movie id in the query so we can display their genres on the DOM; 
router.get('/', (req, res) => {
  // Add query to get all genres

  const queryText = `
  SELECT 	  *
  FROM 	    "genres"
  ORDER BY  "name"; ` ;

  pool.query(queryText)
    .then(result => {
      console.log('the pool.query result GET genres', result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});


// GET genres; include the movie id in the query so we can display their genres on the DOM; 
router.get('/:id', (req, res) => {
  // Add query to get all genres
  const movieId = req.params.id

  const queryText = `
  SELECT 	"name", "movies_genres"."movie_id"
  FROM 	  "genres"
  JOIN 	  "movies_genres"
  ON  	  "genres"."id" = "movies_genres"."genre_id"
  WHERE 	"movies_genres"."movie_id" = ${movieId};`;

  pool.query(queryText)
    .then(result => {
      console.log('the pool.query result GET genres', result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

module.exports = router;