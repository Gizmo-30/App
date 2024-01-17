const {Collections, User} = require("../models")
exports.createColl = async (req,res) => {
    const {name, description, type, user} = req.body

    const searchResult = await Collections.findAll({where: {name,}})
    if(searchResult.length) return res.status(409).send("Database with such name already exists")

    const searchUserId = await User.findOne({attributes: ["id"], where: {username: user}})

    try {
        const result = await Collections.create({name, description, type, UserId: searchUserId.id})
    } catch (e) {
        console.error('E create coll ---->', e)
        res.status(409).send("Something went wrong :(")
    }
}





exports.getColl = async (req,res) => {
    const response = await User.findByPk(1,{include: [Collections]})
    res.json(response)
}