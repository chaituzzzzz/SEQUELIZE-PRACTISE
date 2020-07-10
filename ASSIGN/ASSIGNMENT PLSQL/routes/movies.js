const express = require('express');
const router = express.Router();
const db = require('../config/database');
const movie = require('../models/movies');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get movie list
router.get('/', (req, res) => 
  movie.findAll()
    .then(movies => res.json(movies))
    .catch(err => res.json('error', {error: err})));


// Add a movie
router.post('/add', async (req, res) => {
    // Make lowercase and remove space after comma

    // Insert into table
    let m = await movie.create({
      movieName : 'sureshmovie',
      yearOfRelease : '2015-4-12 00:00:00',
      crew : [{name : 'abc'},{name : 'def'},{name :'ghi'} ],
      overallrating : 4
    })
      .catch(err => res.send(err))
     await m.save();
     res.json(m)
  
});


router.get('/getmoviesofActor',async (req,res) => {
 
  let movies = await movie.findAll({
    where: { 'crew' : { [Op.contains]: [{name : 'kriti'}] }}
 
  });
  
  res.send({movie :movies});
  

})







router.put('/:id', async (req,res) => {
  const movieId = req.params.id;
  let updatedMovie  = {
    movieName : 'Dil bechara - updated',
    yearOfRelease : '2015-4-12 00:00:00',
    crew : ['sushanth singh ip','allia','parinithi'],
    overallrating : 4
  }
  const [ updated ] = await movie.update(updatedMovie, {
    where: { movieId: movieId }
  });
  if(updated) res.json(updated);
  else res.status(500).send('something went wrong')

})


router.delete('/:id', async (req,res) => {
  try {
    const  movieId = req.params.id;
    console.log(movieId);
    const deleted = await movie.destroy({
      where: { movieId: movieId }
    });
    if (deleted) {
      return res.status(204).send("movie deleted");
    }
    throw new Error("movie not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }

})


module.exports = router;