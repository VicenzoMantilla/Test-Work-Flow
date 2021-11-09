const applicants = require('../data/Data_applicants.json')
const getAll = (req, res) => {
    res.json(applicants);
  };
  
//See next interview

const nextInterview = (req, res) => {
  const found = applicants.find(applicant => applicant.id === parseInt(req.params.id));
  if (found) {
      applicants.forEach(applicant => {
        if(applicant.id === parseInt(req.params.id)){
          res.json(applicant.fullName +' '+ applicant.nextInterviewDay)
      }})
  }else{
    res.send(400, "Next interview not found");
  }
};

//Update applicant
const updateApplicant = (req, res) => {
  const found = applicants.find(applicant => applicant.id === parseInt(req.params.id));
  if (found) {
    const updateApplicant = req.body;
    applicants.forEach(applicant => {
      if(applicant.id === parseInt(req.params.id)){
        applicant.fullName = updateApplicant.fullName ? updateApplicant.fullName : applicant.fullName,
        applicant.nextInterviewDay = updateApplicant.nextInterviewDay ? updateApplicant.nextInterviewDay : applicant.nextInterviewDay,
        applicant.nextInterviewTime = updateApplicant.nextInterviewTime ? updateApplicant.nextInterviewTime : applicant.nextInterviewTime,
        applicant.typeOfProfile = updateApplicant.typeOfProfile ? updateApplicant.typeOfProfile : applicant.typeOfProfile
        res.json({msg: 'Applicant updated',applicant})
      }});
  }else{
    res.send('User not found')
  }
};

//Cancel an interview
const deleteInterview = (req, res) => {
    const found = applicants.find(applicant => applicant.id === parseInt(req.params.id));
    if (found) {
      res.json(applicants.filter(applicant => applicant.id !== parseInt(req.params.id)));
    } else {
      res.send('Applicant not found');
    }
} 

//Change type of profile
const updateProfile = (req, res) => {
  const found = applicants.find(applicant => applicant.id === parseInt(req.params.id));
  if (found){
    const newProfile = req.body
    applicants.forEach(applicant =>{
      if (applicant.id === parseInt(req.params.id)){
        applicant.typeOfProfile = newProfile.typeOfProfile ? newProfile.typeOfProfile : newProfile.typeOfProfile
        res.json({msg: 'Profile update to', applicant})
      }
    })
  }
}

module.exports = {
    getAll: getAll,
    nextInterview: nextInterview,
    updateApplicant: updateApplicant,
    deleteInterview: deleteInterview, 
    updateProfile: updateProfile
}