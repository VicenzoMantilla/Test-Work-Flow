const express = require('express');
const applicantsController = require('./controllers/applicants');
//const psychologists = require('./controllers/psychologists');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
});

//Update profile and cancel interviews
 app.get('/applicants', applicantsController.getAll);
 app.get('/applicants/interview/:id', applicantsController.nextInterview);
 app.put('/applicants/:id', applicantsController.updateApplicant);
 app.delete('/applicants/:id', applicantsController.deleteInterview);

//Change type of profile

app.put('/applicants/profiles/:id', applicantsController.updateProfile);

//Psychologists availability

//app.put('/psychologists/:id', psychologists.psychologistsAvailability);
