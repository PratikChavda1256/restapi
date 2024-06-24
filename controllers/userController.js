const asyncHandler = require('express-async-handler')
const Users = require('../models/userModel')

//Get your own User
getUser = asyncHandler(async(req,res)=>{
    const user = await Users.findById(req.params.id)
    if (!user){
        res.status(400)
        throw new Error('No such user Found')
    }
    res.status(200).json({_id: user.id,
        username: user.username,
        email: user.email})
})

module.exports = {getUser}