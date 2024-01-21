const {Collections, User} = require("../models")
exports.createColl = async (req,res) => {
    const {name, description, type} = req.body
    const tokenData = req.tokenData

    const searchResult = await Collections.findOne({where: {name,}})
    console.log(searchResult)
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

exports.deleteColl = async (req,res) => {
    const {name} = req.body
    try {
        const response = await Collections.destroy({where: {name,}})
        console.log(response)
        if(response > 0) return res.status(200).send('Collection deleted successfully')
    } catch (e) {
        console.error("Error deleting coll", e)
        res.status(500).send("Internal Server Error")
    }
}

exports.getColl = async (req,res) => {
    const {name} = req.body
    try {
        const response = await Collections.findOne({where: {name,}})
        res.status(200).send(response)
    } catch (e) {
        console.error("Error getting coll", e)
        res.status(500).send("Internal Server Error")
    }
}

exports.editColl = async (req,res) => {
    const {data, initialName} = req.body

    const searchResult = await Collections.findOne({where: {name: data.name}})
    if(searchResult) return res.status(500).send("name already in use")

    try {
        const response = await Collections.update({
            name: data.name,
            description: data.description,
            type: data.type,
        },{where: {name: initialName}})
        res.status(200).send(response)
    } catch (e) {
        console.error(e)
        res.status(500).send("Internal server error")
    }
}