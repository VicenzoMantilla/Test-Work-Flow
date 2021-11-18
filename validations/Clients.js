const validateClient = (req,res,next)=>{
    if(!req.body.company_name){
        return res.status(400).send('Company name is required');
    }
    if(!req.body.phone_number){
        return res.status(400).send('Phone number is required');
    }
    if(!req.body.email){
        return res.status(400).send('Email is required');
    }
    next()
}

module.exports = {
    validateClient
}