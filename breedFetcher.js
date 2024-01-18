const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName,(error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const breed =  JSON.parse(body);
      if (breed.length > 0) {
        callback(null,breed[0].description);
      } else {
        callback({name: 'NotFound',
          message: 'The specified breed was not found.'} ,null);
      }
    }
  });
};

module.exports = {fetchBreedDescription};