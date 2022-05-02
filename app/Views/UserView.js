const userService = require("../../app/services/UserService");

class UserView {
  static createUser(payload) {

    if (payload === null) return {error: "payload no existe"};
    else {
      const isAValidPayload = Object.keys(payload).toString() === 'id,username,name'

      if(payload.constructor.name !== 'Object') return {error: "el payload recibido no es válido"};
      else if(!isAValidPayload) return {error: "necesitan tener un valor válido 2"};
      else if(Object.values(payload).some(value => value === null)) return {error: "necesitan tener un valor válido 1"};        
      else{
        const {id, username, name} = payload;
        return userService.create(id, username, name);
      }
    }
  }
}

module.exports = UserView;