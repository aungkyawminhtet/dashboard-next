import mongoose from "mongoose";

const {Schema} = mongoose;
const userSchema = new Schema({
    username: {
        required: true,
        type: String,
        unique: true,
        min:3,
        max:20
    },
    email:{
        type: String,
        unique: true,
        required: true,
        min: 3,
        max: 20
    },
    password: {
        type:String,
        required: true
    },
    img: {
        type: String,
    },
    isAdmin: {
        type:String,
    },
    phone: {
        type:String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    address: {
        type: String
    },
    desc: {
        type: String,
    }
},{timestamps: true});

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 3,
    },
    price: {
        type: String,
        required: true,
        min: 0,
    },
    stock:{
        type: String,
        min: 0,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {type: String},
    decs: {type: String}
},{timestamps: true});

export const user = mongoose.models.User ||  mongoose.model("User", userSchema);
export const product = mongoose.models.Product || mongoose.model("Product", productSchema);