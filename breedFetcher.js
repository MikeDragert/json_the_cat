const request = require('request');

const params = process.argv.splice(2);
if (params.length > 0) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + params[0],(error, response, body) => {
    if (error) {
      console.log('Error: ', error.message);
    } else {
      const breed =  JSON.parse(body);
      if (breed.length > 0) {
        console.log(breed[0].description);
      } else {
        console.log('Breed', params[0], 'not found.');
      }
    }
  });
} else {
  console.log('Please provide a breed name');
}
