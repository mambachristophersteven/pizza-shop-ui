import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60,
    },
    desc: {
        type: String,
        required: true,
        maxlength: 60,
    },
})