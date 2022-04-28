const User = require("../models/User");

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio");
    }

    static getInfo(User){
        return Object.values(User);
    }

    static updateUserUsername(User, newUsername){
        User.setUsername = newUsername;
    }

    static getAllUsernames(list){
        return list.map( usuario => usuario.username )
    }
}

module.exports = UserService;