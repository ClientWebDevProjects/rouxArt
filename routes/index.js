const express = require('express');
const router = express.Router();
const appdata = require('../data.json');

//pull out artwork from data.json
const getAllArtwork = () => {
  let myArtwork = [];
  appdata.speakers.forEach(({ artwork }) => {
    myArtwork = myArtwork.concat(artwork)
  });
  return myArtwork;
}  

/* GET home page. */
router.get('/', (req, res, next) => {

  let myArtwork = getAllArtwork();

  res.render('index', {
    title: 'Home',
    artwork: myArtwork 
  });
});

/*Speakers page*/
router.get('/speakers', (req, res, next) => {

  let myArtwork = getAllArtwork();
  
  res.render('speakers', {
    title: 'Speakers', 
    artwork: myArtwork
  });
});

/*Individual speaker page*/
router.get('/speakers/:speakerid', (req, res, next) => {

  let myArtwork = [];    
  appdata.speakers.forEach(({artwork, shortname}) => {
    if(shortname === req.params.speakerid) { //only add this user's artwork
      myArtwork = myArtwork.concat(artwork);
    }
  });

  res.render('speakers', {
    title: 'Speakers', 
    artwork: myArtwork
  });
});

module.exports = router;
