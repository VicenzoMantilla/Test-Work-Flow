const Admins = require('../models/admin')

// See list of admins

const getAdmins = (req, res) => {
  Admins.find()
    .then((Admins) =>{
      return res.status(200).json(Admins)
    })
    .catch((error) =>{
      return res.status(400).json(error)
    })
}

// See admins by Id

const getOneAdmin = (req, res) => {
  Admins.findById(req.params.id,
  (error, oneAdmin) => {
    if(!oneAdmin) {
      return res.status(404).json({
        msg: `Admin with id: ${req.params.id} was not found`
      })
    }
    if(error) {
      return res.status(400).json(error)
    }
    return res.status(200).json(oneAdmin)
  })
}

// Update admin

const updateAdmin = (req, res) => {
	Admins.findByIdAndUpdate(req.params.id,
	{
	  full_name: req.body.full_name,
    username: req.body.username,
    password: req.body.password,
	},
	{new: true},
	(error, newAdmin) => {
	  if(!newAdmin) {
	    return res.status(404).json({
	      msg: 'Admin with id: ${req.params.id} was not found'	
	    })
	}
	if(error) {
	    return res.status(400).json(error)	
	}
	    return res.status(200).json(newAdmin)
	}
)}

// Create admin

const createAdmin = (req, res) => {
  const newAdmin = new Admins({
      full_name: req.body.full_name,
      username: req.body.username,
      password: req.body.password,
    });
  
    newAdmin.save((error, newAdmin) => {
      if (error) {
      return res.status(400).json(error);
      }
      return res.status(201).json(newAdmin);
    });
};

// Delete admin

const deleteAdmin = (req, res) => {
  Admins.findByIdAndDelete(req.params.id, (error, chosenAdmin) => {
    if (!chosenAdmin) {
      return res.status(404).json(`Admin with id ${req.params.id} was not found`);
    } if (error) {
      return res.status(400).json(error);
    }
    return res.status(204).send(`Admin with id ${req.params.id} was remove successfully`);
  });
};

module.exports = {
  getAdmins,
  getOneAdmin,
  updateAdmin,
  createAdmin,
  deleteAdmin,
}