const fs = require('fs');
const Profiles = require('../models/Profiles');

// See list of Profiles
const getProfiles = (req, res) => {
    Profiles.find()
    .then((profiles) => {
        res.status(200).json(profiles);
    })
    .catch((error) => {
        res.status(404).json()
    })
}

// Create new Profile
const addProfile = (req, res) => {
    const profile = new Profiles({
        description: req.body.description
      });
      profile.save((error) => {
        if (error) {
          return res.status(400).json(error);
        }
        return res.status(201).json(profile);
      });
}

// Edit Profile
const updateProfile = (req, res) => {
    Profiles.findByIdAndUpdate(req.params.id,
        { description : req.body.description },
        { new: true },
        (error, newProfile) =>  {
            if(error) {
                res.status(400).json(error)
            }
            return res.status(200).json(newProfile)
    })
}

// Delete Profile
const deleteProfile = (req, res) => {
    Profiles.findByIdAndDelete(req.params.id, (error, profile) => {
        if (!profile) {
          return res.status(404).json(
              {msg: `There's no profile with the id ${req.params.id}`}
            ); 
        }
        if (error) {
          return res.status(400).json(error);
        }
        return res.status(204).send();
      });
};

module.exports = {
  getProfiles,
  addProfile,
  updateProfile,
  deleteProfile,
}