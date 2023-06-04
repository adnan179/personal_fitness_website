const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { findOne } = require('../models/workoutschema');

const requreAuth = async (req,res,next) =>{

  //verifying authentication
  // grabbing the authorization header
  const { authorization } = req.headers

  if(!authorization){
    return res.status(401).json({error: 'authorization token required'})
  }

  //grabbing the token by splitting the authorizationheader by space
  const token = authorization.split(' ')[1]

  //verifying the token is valid or not
  try{
    const {_id} = jwt.verify(token, process.env.SECRET)

    //returns the id property of the user
    req.user = await User.findOne({_id}).select('_id')
    next()

  }catch(error){
    console.log(error)
    res.status(401).json({error: 'request is not authorized'})
  }

}

module.exports = requreAuth;