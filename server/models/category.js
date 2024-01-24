const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

    category_id:{
        type:String,
        required:true
    },
    category_name:{
        type:String,
        required:true
    },
    category_desc:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Categories', categorySchema);