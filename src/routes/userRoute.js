// importing dependancies
const express = require('express')
const UserModel = require('../models/userModel')

// createing route instances
const router = express.Router()

// getting all users
router.get('/', async (req, res) => {
    try {
        const allUsers = await UserModel.find()
        res.send(allUsers)

    } catch (error) {
        console.log(`error occured while fetching data ${error}`)
    }
})

// createing users
router.post('/createUser', async (req, res) => {
    try {
        const users = await UserModel.create({
            username: req.body.username,
            userEmail: req.body.userEmail,
            origin: req.body.origin,
            isAdmin: req.body.isAdmin,
            password: req.body.password,
        })
        res.json(users)

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
        res.json({ message: "post updated" })
    } catch (error) {
        console.log(`error occured while updating ${error}`)
    }
})
// deleting user
router.delete('/deleteUser/:userId', async (req, res) => {
    try {
        await UserModel.findByIdAndRemove({ _id: req.params.userId })
        res.json({ message: "deleted a post" })
    } catch (error) {
        console.log(`Erro while deleting a post ${error}`)
    }
})

module.exports = router