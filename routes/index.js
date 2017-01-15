const express = require('express');
const router = express.Router();
const appdata = require('../data.json')
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    
    let myArtwork = [];
    
    appdata.speakers.forEach(({artwork}) => {
      myArtwork = myArtwork.concat(artwork);
    });
    
    title: 'Home',
    artwork: myArtwork 
  });
});

module.exports = router;
