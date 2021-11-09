//Day and time availability
const fs = require('fs');
const timeAvailability = fs.readFileSync('./data/Data_timeAvailability.json');
const availabilityData = JSON.parse(timeAvailability);

const psychologistsAvailability = (req, res) => {
    const availability = availabilityData.some(psychologist => psychologist.id === parseInt(req.params.id));
      if (found) {
        res.json(availabilityData.filter(psychologist => psychologist.id == parseInt(req.params.id)));
        fs.writeFile('./data/Data_timeAvailability.json', JSON.stringify(psychologist), err => {
          if (err) {res.send('Verify profile')};
        });
        res.json(availability);
      } else {
        res.send('Psychologist not available');
      }
  }

module.exports = {
  psychologistsAvailability: psychologistsAvailability,
}