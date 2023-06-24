const users = require('../utils/users')

const functionLogin = (req, res) => {
    const {email, password} = req.query;

    if(email == users.email && password == users.password){
        res.status(200).json({acces: true})
    }

    return res.status(200).json({acces: false})
}
module.exports = {
    functionLogin
}