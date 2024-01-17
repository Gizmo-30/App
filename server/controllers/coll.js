const {Collections, User} = require("../models")
exports.createColl = async (req,res) => {
    const {name, description, type, user} = req.body
    const searchResult = await Collections.findAll({where: {name,}})
    console.log(searchResult)
}





exports.getColl = async (req,res) => {
    const response = await User.findByPk(1,{include: [Collections]})
    res.json(response)
}