const fs = require('fs');
const Psychologists = require('../models/Psychologists');
const Appointments = require('../models/Appointments');
const Applicants = require('../models/Applicants')

// See list of psychologists
const getPsychologists = (req, res) => {
    Psychologists.find()
        .then((psychologists) => {
            res.status(200).json(psychologists);
        })
        .catch((error) => {
            res.status(404).json()
        })
};

// See Psychologist by Id 
const getPsychologistById = (req, res) => {
    Psychologists.findById(req.params.id, (error, psychologist) => {
        if(!psychologist) {
            return res.status(404).json(
                { msg : `There's no psychologist with id ${req.params.id}` }
            ); 
        }
        if (error) {
            return res.status(400).json(error);
        }
        res.status(200).json(psychologist);
    }) 
};


// See Psychologist by Name
const getPsychilogistByName = (req, res) => {
    Psychologists.find( {full_name: req.params.full_name} )
    .then((Psychologists) => {
        res.status(200).json(Psychologists);
    })
    .catch((error) => {
        res.status(404).json(
            {msg: `There's no psychologists with the name ${req.params.full_name}`}
        )
    })
};


// Add Psychologist
const addPsychologist = (req, res) => {
    const psychologist = new Psychologists({
        full_name: req.body.full_name,
        email: req.body.email,
        license: req.body.license,
        address: req.body.address,
        phone_number: req.body.phone_number,
        birth_date: req.body.birth_date,
      });
    
      psychologist.save((error) => {
        if (error) {
          return res.status(400).json(error);
        }
        return res.status(201).json(psychologist);
      });
}

// Delete Psychologist
const deletePsychologist = (req, res) => {
    Psychologists.findByIdAndDelete(req.params.id, (error, psychologist) => {
        if (!psychologist) {
          return res.status(404).json(
              {msg: `There's no psychologist with the id ${req.params.id}`}
            ); 
        }
        if (error) {
          return res.status(400).json(error);
        }
        return res.status(204).send();
      });
};

// Edit Psychologist
const updatePsychologist = (req, res) => {
    Psychologists.findByIdAndUpdate(req.params.id,
        { full_name : req.body.full_name,
        email: req.body.email,
        license: req.body.license,
        address: req.body.address,
        phone_number: req.body.phone_number,
        birth_date: req.body.birth_date,
        },
        { new: true },
        (error, newPsychologist) =>  {
            if(error) {
                res.status(400).json(error)
            }
            return res.status(200).json(newPsychologist)
    })
};

// See Appointments
const getAppointments = (req, res) => {
    Appointments.find()
    .then((appointments) => {
        res.status(200).json(appointments);
    })
    .catch((error) => {
        res.status(404).json()
    })
};


// Cancel Appointment
const deleteAppointment = (req, res) => {
    Appointments.findByIdAndDelete(req.params.id, (error, appointment) => {
        if (!appointment) {
          return res.status(404).json(
              {msg: `There's no appointment with the id ${req.params.id}`}
            ); 
        }
        if (error) {
          return res.status(400).json(error);
        }
        return res.status(204).send();
      });
};

// Edit Applicant Profile
const updateApplicantProfile = (req, res) => {
    Applicants.findByIdAndUpdate(req.params.id,
        { profile: req.body.profile},
        { new: true },
        (error, newApplicantProfile) =>  {
            if(error) {
                res.status(400).json(error)
            }
            return res.status(200).json(newApplicantProfile)
    })
};

module.exports = {
    getPsychologists,
    getPsychologistById,
    getPsychilogistByName,
    deletePsychologist,
    updatePsychologist,
    getAppointments,
    deleteAppointment,
    updateApplicantProfile,
    addPsychologist
};
