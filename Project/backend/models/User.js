const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; 
const userSchema = new Schema(
    {
        username : {
            type: String,
            required: true,
            unique: true
        }, 

        password : {
            type : String,
            required : true
        },
        
        name : {
            type : String,
            required : true
        },

        age : {
            type : Number,
            required : true
        },

        role : {
            type : String,
            required: true
        },
        refreshToken: {
            type: String,
            default: '',
          }
    }
)

const User = mongoose.model("User", userSchema); 

module.exports = User;
