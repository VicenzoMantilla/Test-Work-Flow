const validateProfile = (req,res,next)=>{
    if(!req.body.description){
        return res.status(400).send('Description is required');
    }
    next()
}

module.exports = {
    validateProfile
}