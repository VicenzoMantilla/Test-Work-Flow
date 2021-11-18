const Applicants = require('../models/Applicants');

// See list of applicants

const getApplicants = (req, res) => {
    Applicants.find()
      .then((applicants) =>{
        return res.status(200).json(applicants)
      })
      .catch((error) =>{
        return res.status(400).json(error)
      })
}

// See applicants by Id

const getOneApplicant = (req, res) => {
  Applicants.findById(req.params.id,
  (error, oneApplicant) => {
    if(!oneApplicant) {
      return res.status(404).json({
        msg: `Applicant with id: ${req.params.id} was not found`
      })
    }
    if(error) {
      return res.status(400).json(error)
    }
    return res.status(200).json(oneApplicant)
  })
}

// Update applicant

const updateApplicant = (req, res) => {
	Applicants.findByIdAndUpdate(req.params.id,
	{
        full_name: req.body.full_name,
        username: req.body.username,
        birth_date: req.body.birth_date,
        phone_number: req.body.phone_number,
        email: req.body.email,
        address: req.body.address,
        availability: req.body.availability,
	},
	{new: true},
	(error, updatedApplicant) => {
	  if(!updatedApplicant) {
	    return res.status(404).json({
	      msg: 'Applicants with id: ${req.params.id} was not found'	
	    })
	}
	if(error) {
	    return res.status(400).json(error)	
	}
	    return res.status(200).json(updatedApplicant)
	}
)}

// Add applicant

const createApplicant = (req, res) => {
    const newApplicant = new Applicants({
        full_name: req.body.full_name,
        username: req.body.username,
        birth_date: req.body.birth_date,
        phone_number: req.body.phone_number,
        email: req.body.email,
        address: req.body.address,
        availability: req.body.availability,
      });
    
      newApplicant.save((error, newApplicant) => {
        if (error) {
        return res.status(400).json(error);
        }
        return res.status(201).json(newApplicant);
      });
};

// Delete applicant

const deleteApplicant = (req, res) => {
  Applicants.findByIdAndDelete(req.params.id, (error, chosenApplicants) => {
    if (!chosenApplicants) {
      return res.status(404).json(`Applicant with id ${req.params.id} was not found`);
    } if (error) {
      return res.status(400).json(error);
    }
    return res.status(204).send(`Applicant with id ${req.params.id} was remove successfully`);
  });
};

module.exports = {
    getApplicants,
    getOneApplicant,
    createApplicant,
    updateApplicant,
    deleteApplicant,
};