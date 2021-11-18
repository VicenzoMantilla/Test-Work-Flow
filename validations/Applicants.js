const validateApplicant = (req,res,next)=>{
    if(!req.body.full_name){
        return res.status(400).send('Name is required')
    }
    else if(!req.body.birth_date){
        return res.status(400).send('Birth date is required')
    }
    else if(!req.body.phone_number){
        return res.status(400).send('Phone number is required')
    }
    else if(!req.body.availability){
        return res.status(400).send('Availability is required')
    }
    next()
}

module.exports = {
    validateApplicant
}