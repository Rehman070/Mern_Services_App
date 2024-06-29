
const { response } = require('express');
const User = require('../models/user-model')
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
    try {
        const { username, email, password, phone, address, is_admin } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            res.status(500).send({ message: "User already exists" })
        }

        else {
            const saltRound = 10;
            const hashedPassword = await bcrypt.hash(password, saltRound);
            const Usercreated = await User.create({ username, email, password: hashedPassword, phone, address, is_admin });
            console.log(Usercreated)
            res.status(200).send({ message: "User Successfully Registered", token: await Usercreated.generateToken(), userid: Usercreated._id.toString() });
        }




    } catch (error) {
        res.status(404).send({ message: 'Page Not Found' });

    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if user with provided email exists
        const user = await User.findOne({ email });
        
        // If user does not exist, return 404
        if (!user) {
            return res.status(404).send({ message: 'User Not Found' });
        }
        
        // Validate the password
        const validPassword = await bcrypt.compare(password, user.password);
        
        // If password is invalid, return 400
        if (!validPassword) {
            return res.status(400).send({ message: 'Invalid Password' });
        }
        
        // If user is found and password is valid, generate and send token
        const token = await user.generateToken();
        const userId = user._id.toString();
        res.status(200).send({ message: 'User Logged In', token, userId });
        
    } catch (error) {
        // Handle server errors
        console.error('Error in signin:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}


const home = (req, res) => {
    try {
        res.status(200).send({ msg: 'OK' });
    } catch (error) {
        res.status(500).send({ msg: 'Internal Server Error' });
    }
}


module.exports = {home , signin, signup };