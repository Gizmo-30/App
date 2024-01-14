
// auth.post('/registration', async(req,res) => {
//     const {username, email, password} = req.body
//
//     // validation
//     const searchUsername = await User.findAll({where: {username,}})
//     const searchEmail = await User.findAll({where: {email,}})
//     if(searchUsername.length) return res.status(409).send("Username already in use")
//     if(searchEmail.length) return res.status(409).send("Email already in use")
//
//     const hashedPassword = await bcrypt.hash(password, 10);
//
//     try {
//         await User.create({username, email, password: hashedPassword,})
//         const searchResult = await User.findAll({where: {username, email,}})
//         res.status(200).send(searchResult)
//     } catch (e) {
//         console.error("Error creating user ----->",e)
//         res.status(500).send("Internal server error")
//     }
// })




// auth.post('/login', async (req, res) => {
//     const {username, password} = req.body
//     const searchResult = await User.findAll({where: {username: username}})
//
//     if(!searchResult.length) return res.status(401).send('Invalid username')
//
//     let match = await bcrypt.compare(password, searchResult[0].password)
//
//     if (!match) return res.status(401).send('Invalid password')
//     res.status(200).send(searchResult);
// })