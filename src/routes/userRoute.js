// importing dependancies
const express = require('express')
const UserModel = require('../models/userModel')

// createing route instances
const router = express.Router()

// getting all users
router.get('/', async (req, res) => {
    try {
        const allUsers = await UserModel.find()
        res.send({ success: true, data: allUsers })
        res.json({ message: "welcome home", data: allUsers })

    } catch (error) {
        console.log(`error occured while fetching data ${error}`)
    }
})

// createing users
router.post('/createUser', async (req, res) => {
    try {
        const createUser = await UserModel.create({
            username: req.body.username,
            userEmail: req.body.userEmail,
            origin: req.body.origin,
            isAdmin: req.body.isAdmin,
            password: req.body.password,
        })
        res.send({ success: true, message: "user added successfully", data: createUser })

    } catch (error) {
        res.json(`error occured ${error.message}`);
    }
})
router.patch('/updateUser/:userId', async (req, res) => {
    try {
        await UserModel.updateOne({ _id: req.params.userId }, {
            $set: {
                username: req.body.username,
                userEmail: req.body.userEmail,
                origin: req.body.origin,
                isAdmin: req.body.isAdmin,
                password: req.body.password,
            }
        })
        res.send({ success: true, message: "user updated successfully" })
    } catch (error) {
        console.log(`error occured while updating ${error}`)
    }
})
// deleting user
router.delete('/deleteUser/:userId', async (req, res) => {
    try {
        await UserModel.findByIdAndRemove({ _id: req.params.userId })
        res.send({ success: true, message: "user deleted" })
    } catch (error) {
        console.log(`Erro while deleting a post ${error}`)
    }
})

module.exports = router