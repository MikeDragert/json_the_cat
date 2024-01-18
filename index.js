const { fetchBreedDescription } = require('./breedFetcher');

const params = process.argv.splice(2);
let breedName = "";
if (params.length > 0) {
  breedName = params[0];
  fetchBreedDescription(breedName, (error, desc) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      console.log(desc);
    }
  });
} else {
  console.log('Please provide a breed name');
}