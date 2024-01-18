const { fetchBreedDescription } = require('../breedFetcher');

const assert = require('chai').assert;

describe('#breedFetcher', () => {
  it('returns a string descriptioni for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());

      done();
    })
  });
  
  it('returns Not Found for a invalid breed, via callback', (done) => {
    fetchBreedDescription('DudDudDUd', (err, desc) => {
      assert.equal(desc, null);
      const expectedError = "NotFound";
      assert.equal(expectedError, err.name);

      done();
    })
  });
});