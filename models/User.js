var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var bcrypt = require("bcrypt");

var userSchema = new Schema({
    name: {
        type : String,
        required : [
            true,
            "Name is required",
        ],
    },

    email: {
        type : String,
        required : [
            true,
            "Email is required",
        ],
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
        maxlength : 12,
    },

    date : {
        type : Date,
        default : Date.now
    }
}, {timestamps : true});

userSchema.method.validatePassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

module.exports = User = mongoose.model("User", userSchema);