const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();



//UfUpqKrU60bGSbg4
// db connection: mongodb+srv://piyush18v:UfUpqKrU60bGSbg4@fullstack-blog.qmuvp.mongodb.net/?retryWrites=true&w=majority&appName=fullstack-blog
//port
const port = process.env.PORT || 3000;

//middleware

app.use(express.urlencoded({ extended: true }));
//ejs
app.set('view engine', 'ejs');
//routes
// render login page
app.get('/auth/login', (req, res) => {
    res.render('login');
});
app.get('/auth/register', (req, res) => {
    res.render('register');
});

//main logic for user registration
app.post('/auth/register',async(req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.send('user already exists');
        } 
        const newUser = new User({ username, email, password });
        await newUser.save();
        
        console.log('user registered',newUser);
        return res.redirect('/auth/login');
    } catch (error) {
        console.error("Registration Error",error);
        return res.status(500).send('something went wrong');
    }
});
// start server
mongoose.connect(process.env.MONGODB_URL).then(
    () => {
        console.log('db connected');
        app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
    })
    .catch(() =>  {
        console.log('error');
    });
