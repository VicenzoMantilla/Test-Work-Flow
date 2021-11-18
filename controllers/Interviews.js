const fs = require('fs');
const Interviews = require('../models/Interviews');

// All interviews
const getInterviews = (req, res) => {
  Interviews.find()
   .then((interviews)=>{
    res.status(200).json(interviews)
   })
   .catch((error)=>{
    res.status(400).json(error)
   })
};


// See interviews for Postulant
const getInterviewsByClient = (req, res) => {
    Interviews.find( {id_clients: req.params.id_clients} )
        .then((interviews) => {
            res.status(200).json(interviews);
        })
        .catch((error) => {
            res.status(404).json(
                {msg: `There's no interviews booked with the user id ${req.params.id_user}`}
                )
        })
};

// Cancel interview
const deleteInterview = (req, res) => {
    Interviews.findByIdAndDelete(req.params.id, (error, interview) => {
      if (!interview) {
        return res.status(404).json(
            {msg: `There's no interview with the id of ${req.params.id_user}`}
            ); 
      }
      if (error) {
        return res.status(400).json(error);
      }
      return res.status(204).send();
    });
  };

  module.exports = {
    getInterviews,
    getInterviewsByClient,
    deleteInterview,
  };
