import mongoose from "mongoose";

const schema= new mongoose.Schema({
    TenDanhMuc: {
        type: String,
        required: true
    }
}, {timestamps:true});

export const CatalogModel= mongoose.model('catalog', schema)