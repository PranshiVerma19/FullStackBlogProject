const mongoose = require('mongoose');
//schema

const userSchema = new mongoose.Schema(

{
    username: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    },
    profilePicture: {
        url: String,
        public_id: String
    },
    bio: {
        type: String,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
      
        },
    ],
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
        
     const User = mongoose.model('User', userSchema);
    //model
    module.exports =  User;

    