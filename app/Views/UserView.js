const userService = require("../../app/services/UserService");

class UserView{

    static createUser(payload){
        let error = "";
        if(payload === null){
          error = "payload no existe";
        } else if(Object.values(payload).some(value => value === null)){
            error = "necesitan tener un valor válido";
        }

        return { error: error}
    }

}

module.exports = UserView;