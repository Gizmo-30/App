const {Collections, User} = require("../models")
exports.createColl = (req,res) => {
    const {name, description, type, user} = req.body
    console.log(name, description, type, user)
}
exports.getColl = async (req,res) => {
    const response = await User.findByPk(1,{include: [Collections]})
    res.json(response)
}