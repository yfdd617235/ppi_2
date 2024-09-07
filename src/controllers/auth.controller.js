
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const passwordHash = await bcrypt.hash(password, 10) //cmlkn879bkjsbjbo98

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        const userSaved = await newUser.save(); //Save the new user created
        const token = await createAccessToken({id: userSaved._id})

        res.cookie('token', token)
        // res.json({
        //     message: "User created successfully"
        // })
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        }); // Frontend does not need password info, so it is not here


        //res.send('Registrando...')
        //console.log(newUser);
    } catch (error) {
        console.log(error)
    }

};

export const login = (req, res) => res.send('login');