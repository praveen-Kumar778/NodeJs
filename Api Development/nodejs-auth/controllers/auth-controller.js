const model = require('../models/auth-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async(req,res) => {
    try{
        const {username , email,password,role}  = req.body;

        const user = await model.findOne({$or : [{username} , {email}]});

        if(user){
            return res.status(404).json({
                success : false,
                message : "Username or email already exists "
            })
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashCode = await bcrypt.hash(password,salt);

        // create a new user 
        const newUser = new model({
            username,
            email ,
            password : hashCode ,
            role : role || 'user'
        });

        await newUser.save();

        if(newUser){
            res.status(201).json({
                success:true,
                message : "User register successfully",
                data : newUser
            })
        }else{
            res.status(404).json({
                success : false , 
                message : "Unable to register the user "
            })
        }

    }catch(error){
        console.log(error);

        res.status(500).json({
            success : false,
            message : 'Some error occured on Server'
        })
        
    }
}

const loginUser = async(req,res) =>{
    try{
        const {username , password} = req.body ;

        // find the if the current user is exists in database or not 
        const user = await model.findOne({username});

        if(!user){
            return res.status(400).json({
                success : false,
                message : `User Doesn't Exists!`
            })
        }
        // if password is correct or not
        const isPasswordMatch = await bcrypt.compare(password, user.password) ;

        if(!isPasswordMatch){
            return res.status(400).json({
                success : false,
                message : 'Invalid credentials!'
            })
        }

        // create user token until user logout
        const accessToken = jwt.sign({
            userId : user._id ,
            username : user.username ,
            role : user.role
        },process.env.JWT_SECRET_KEY,{
            expiresIn : '30m'
        })

        res.status(200).json({
            success : true ,
            message : 'Logged in successfull',
            accessToken
        })

    }catch(error){
        console.log(error);

        res.status(500).json({
            success : false,
            message : 'Some error occured on Server'
        })
        
    }
}
module.exports = {
    registerUser,loginUser
}