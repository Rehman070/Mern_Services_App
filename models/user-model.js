const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
    {
       username:{
        type: String,
        required: true
       },

       email:{
        type: String,
        required: true
       },

       phone:{
        type: String,
        required: true
       },
       password:{
        type: String,
        required: true
       },
       is_admin:{
        type: Boolean,
        required: true
       },
       address:{
        type: String,
        required: true
       }
    }
);

UserSchema.methods.generateToken = function(){

    try {
        return jwt.sign(
            {_id: this._id.toString(),
             email: this.email,
             is_admin: this.is_admin},
            process.env.JWT_SECRET, 
            { expiresIn: '30d'});
        
    } catch (error) {
        console.log('Error generating token');
        
    }
    
}

const User = new mongoose.model("User",UserSchema);
module.exports = User;