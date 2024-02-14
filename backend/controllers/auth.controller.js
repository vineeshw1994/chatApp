import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';
export const login = async (req, res) => {
    try {
        
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || " ");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        
        generateToken(user._id,res);

        res.status(200).json({
          _id: user._id,
          fullName:user.fullName,
          userName:user.userName,
          profilePic: user.profilePic,  
        })

    } catch (error) {
        console.log('Error in signup controller', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'password does not match' })
        }

        const user = await User.findOne({ userName })

        if (user) {
            return res.status(400).json({ error: 'user already exist' })
        }

        const slat = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, slat)

        //https://avatar-placeholder.iran.liara.run/

        const boyprofilePic = `https://avatar.iran.liara.run/public/boy?userName=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?userName=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password: hashPassword,
            gender,
            profilePic: gender === 'male' ? boyprofilePic : girlProfilePic,
        })

        if (newUser) {

            generateToken(newUser._id, res)
            await newUser.save()
            res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName, userName: newUser.userName, profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ error: 'Invalid user data' })
        }


    } catch (error) {
        console.log('Error in signup controller', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
export const logout = async (req, res) => {
    console.log('this is logout user ')
    res.send('logout')
}