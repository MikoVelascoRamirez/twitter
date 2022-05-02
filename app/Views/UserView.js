const userService = require("../../app/services/UserService");

class UserView {
  static createUser(payload) {
    const error = "necesita tener un valor válido";

    if (payload === null) return {error};
    else {
      const isAValidPayload = Object.keys(payload).toString() === 'id,username,name'

      if(payload.constructor.name !== 'Object') return {error};
      else if(!isAValidPayload) return {error};
      else if(Object.values(payload).some(value => value === null)) return {error};        

      return userService.create(payload.id, payload.username, payload.name);
    }
  }
}

module.exports = UserView;