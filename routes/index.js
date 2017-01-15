const express = require('express');
const router = express.Router();
const appdata = require('../data.json');

/* GET home page. */
router.get('/', (req, res, next) => {
    
  let myArtwork = [];    
  appdata.speakers.forEach(({artwork}) => {
    myArtwork = myArtwork.concat(artwork);
  });

  res.render('index', {
    title: 'Home',
    artwork: myArtwork 
  });
});

/*Speakers page*/
router.get('/speakers', (req, res, next) => {

  let myArtwork = [];    
  appdata.speakers.forEach(({artwork}) => {
    myArtwork = myArtwork.concat(artwork);
  });

  res.render('speakers', {
    title: 'Speakers', 
    artwork: myArtwork
  });
});

module.exports = router;
