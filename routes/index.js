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
    artwork: myArtwork,
    artists: appdata.speakers 
  });
});

/*Speakers page*/
router.get('/speakers', (req, res, next) => {

  let myArtwork = getAllArtwork();
  
  res.render('speakers', {
    title: 'Speakers', 
    artwork: myArtwork,
    artists: appdata.speakers
  });
});

/*Individual speaker page*/
router.get('/speakers/:speakerid', (req, res, next) => {

  let myArtwork = [];
  let myArtists = [];    
  appdata.speakers.forEach((item) => {
    //only add this user's artwork
    if(item.shortname === req.params.speakerid) { 
      myArtwork = myArtwork.concat(item.artwork);
      myArtists.push(item);
    }
  });

  res.render('speakers', {
    title: 'Speakers', 
    artwork: myArtwork,
    artists: myArtists
  });
});

module.exports = router;
