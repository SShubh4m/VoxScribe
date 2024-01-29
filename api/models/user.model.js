import { Mongoose } from "mongoose";
const userSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    }, 
    },{
        timestamps: true});
const User = Mongoose.model('User', userSchema);
export default User;
        