const validateInterview = (req,res,next)=>{
    if(!req.body.date){
        return res.status(400).send('Date is required');
    }
    if(!req.body.result){
        return res.status(400).send('Result is required');
    }
    next()
}

module.exports = {
    validateInterview
}