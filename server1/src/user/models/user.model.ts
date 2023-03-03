import { Schema, Document } from "mongoose";

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String,
    address: String,
    role: {type: String, default: 'member'},
}, {
    timestamps: true,
    collection: "users",
})

export {userSchema};

export interface User extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    role: string;
}