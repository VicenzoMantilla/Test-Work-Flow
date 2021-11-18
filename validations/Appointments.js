const validateAppointment = (req,res,next)=>{
    if(!req.body.date){
        return res.status(400).send('Date is required');
    }
    if(!req.body.time){
        return res.status(400).send('Time is required');
    }
    next()
}

module.exports = {
    validateAppointment
}