const UserModel = require('../models/users');
const userCtrl = {};


userCtrl.createUser =  async (req, res) => {
    await UserModel.save(req.body);
    res.json('Success');
}

userCtrl.updateUser =  async (req, res) => {
    const { body } = req;
    const user = await UserModel.update(body, function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

userCtrl.deleteUser =  (req, res) => {
    res.json({
        status: 'Metodo getUser'
    });
}

userCtrl.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findById(id, function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

userCtrl.getUsers = async (req, res) => {
    const user = await UserModel.findAll(function(err, content) 
    {
        if(err){
            console.log(err);
        } else {
            res.json(content);
        }
    });
}

module.exports = userCtrl;

