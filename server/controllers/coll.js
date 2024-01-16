exports.createColl = (req,res) => {
    const {name, description, type, user} = req.body
    console.log(name, description, type, user)
}