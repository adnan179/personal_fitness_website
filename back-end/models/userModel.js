const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
  }
})

// static sign up method
userSchema.statics.signup = async function(email, password) {

  //validation
  //checking if both email and password aren't null values
  if(!email || !password){
    throw Error('All fields must be filled')
  }
  //checking if email is valid or not
  if(!validator.isEmail(email)){
    throw Error('Not a valid email address')
  }
  //
  if(!validator.isStrongPassword(password)){
    throw Error('password not strong enough')
  }

  const exists = await this.findOne({ email })
  //checking if the email already exists or not
  if(exists){
    throw Error('Email already exists')
  }
  //creating a salt value which will be added to the password so that the same passowrds 
  //for different users it generates different salt values to get different hash values
  const salt = await bcrypt.genSalt(10) //10 is the no.of rounds the data will be processed


  //hashing the password
  const hash = await bcrypt.hash(password,salt)

  //creating a new document in the database
  const user = await this.create({ email, password:hash })
  return user;
}

// static log in method
userSchema.statics.login = async function(email, password) {
  //validation
  //checking if both email and password aren't null values
  if(!email || !password){
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  //checking if the user email is valid or not for login
  if(!user){
    throw Error('invalid details')
  }

  //comparing the entered password with hashed password in the database
  const match = await bcrypt.compare(password, user.password)
  
  //checking if the password matches or not
  if(!match){
    throw Error('invalid details')
  }

  return user;

}

module.exports = mongoose.model('User',userSchema);