const validatePsychologist = (req,res,next)=>{
    if(!req.body.full_name){
        return res.status(400).send('Name is required');
    }
    if(!req.body.email){
        return res.status(400).send('Email is required');
    }
    if(!req.body.phone_number){
        return res.status(400).send('Phone Number is required');
    }
    if(!req.body.license){
        return res.status(400).send('License Number is required');
    }
    next()
}

module.exports = {
    validatePsychologist
}