const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// GET genres; include the movie id in the query so we can display on DOM; 
router.get('/', (req, res) => {
  // Add query to get all genres

  const queryText = `
    SELECT 	"name", "movies_genres"."movie_id"
    FROM 	  "genres"
    JOIN 	  "movies_genres"
    ON  	  "genres"."id" = "movies_genres"."genre_id"; ` ;
  
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

module.exports = router;