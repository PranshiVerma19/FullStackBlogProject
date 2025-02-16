const mongoose = require('mongoose');
//schema

const postSchema = new mongoose.Schema(

{
    title: {
        type: String,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    images:{
        url: {
        type: String,
        required: true,
    },
    public_id: {
        type: String,
        required: true,
        },  
},
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            },
        ],},
    
        {
            timestamps: true,
         }
        );
        
     const Post = mongoose.model('User', userSchema);
    //model
    module.exports =  Post;

    