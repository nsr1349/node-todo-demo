const User = require('../model/User')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {}

userController.createUser = async (req, res) => {
    try {
        const { email , name, password } = req.body 
        const user = await User.findOne({ email })

        if (user) throw new Error('이미 가입되어 있단다')

        const newUser = new User({ email , name, password : bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds))})
        await newUser.save()

        res.status(200).json({status : 'ok', data : newUser})
    } catch (err) {
        res.status(400).json({status : 'fail', err})
    }
}


module.exports = userController