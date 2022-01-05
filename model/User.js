const mongoose = require("mongoose")

const Schema = mongoose.Schema ;
const userschema = new Schema({
    name : {
        type : String  ,
        required : true
    },
    password : {
        type : String  ,
        required : true
    },
    email : {
        type : String  ,
        required : true
    },
     role: {
        type: Number,
        default: 0, //0=user, 1=admin
    },
})
module.exports= mongoose.model('user'  , userschema)