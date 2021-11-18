const validateAdmin = (req,res,next)=>{
    if(!req.body.username){
        return res.status(400).send('Username is required');
    }
    if(!req.body.password){
        return res.status(400).send('Password is required');
    }
    next()
}
module.exports = {
    validateAdmin
}