import express from 'express';
import usermodel from '../models/User.js';

const router = express.Router();

router.post('/login', async (req,res) => {
    try {
        const user = await usermodel.findOne({
            email: req.body.email,
            password: req.body.password,
        });

        if(user) {
            res.json({
                success: true,
                message: "Login successful",
                data: user 
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})

router.post('/register', async (req, res) => {
    console.log('Registration attempt with data:', req.body);
    
    try {
        
        const existingUser = await usermodel.findOne({ email: req.body.email });
        if (existingUser) {
            console.log('Registration failed - email exists:', req.body.email);
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        // Create new user
        const newUser = new usermodel(req.body);
        const savedUser = await newUser.save();
        
        console.log('User successfully registered:', savedUser);
        
        res.json({
            success: true,
            message: "User registered successfully",
            data: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email,
                createdAt: savedUser.createdAt
            }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: error.message,
            errorDetails: error.errors 
        });
    }
});
export default router;