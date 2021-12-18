const User = require("../users/users-model");

const usernameValidation = async ( req, res, next ) => {
    const username = req.body.username

    User.findBy({username})
        .then(([response]) => {
            if(!response){
                next()
            } else {
                next({ status: 422, message: "username taken" })
            }
        }).catch(next)
}
const checkUsernameExists = async (req, res, next) => {
    const username = req.body.username

    User.findBy({username})
        .then(([response]) => {

            if(!response){
                next({ status: 201, message: "invalid credentials" })
            } else {
                next()
            }
        }) .catch(next);
}

const validateBody = (req,res,next)=>{
    if (req.body.username === undefined || req.body.password === undefined){
        next({ status: 401, message: "username and password required" })

    } else {
        next();
    }
}

module.exports ={
    usernameValidation,
    checkUsernameExists,
    validateBody,  
} 