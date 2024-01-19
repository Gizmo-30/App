const {Collections, User} = require("../models")
exports.createColl = async (req,res) => {
    const {name, description, type} = req.body
    const tokenData = req.tokenData

    const searchResult = await Collections.findOne({where: {name,}})
    if(searchResult) return res.status(409).send("Database with such name already exists")

    const searchUserId = await User.findOne({attributes: ["id"], where: {username: tokenData.username}})
    try {
        const result = await Collections.create({name, description, type, UserId: searchUserId.id})
        res.status(200).send('Collection created')
    } catch (e) {
        console.error('E create coll ---->', e)
        res.status(409).send("Something went wrong :(")
    }
}


exports.getColls = async (req,res) => {
    const tokenData = req.tokenData
    const searchUserId = await User.findOne({attributes: ["id"], where: {username: tokenData.username}})

    const response = await User.findByPk(searchUserId.id,{include: [Collections]})
    res.json(response.Collections)
}