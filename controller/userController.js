const User = require('../model/User');
const Error = require('../utils/error');

exports.createUser = async (req, res) => {
    const errMsg = new Error();
    let message = {};
        User.find({username: req.body.username}).exec().then(
        user => {
            if(user.length >= 1){
                message = errMsg.setStatus(500,	'The username already exist.');
                res.status(500).send(message);
            }else{
                const data = {
                    username: req.body.username,
                    nickname: req.body.nickname
                }
                User.create(data);
                res.status(200).json('Created');
            }
        });    
};