const userService = require("../../app/services/UserService");

class UserView {
  static createUser(payload) {
    if (payload === null) {
      return {error: "payload no existe"};
    } else {
        const isAValidPayload = Object.keys(payload).toString() === ['id', 'username', 'name'].toString();
        const payloadLength = Object.keys(payload).length;
        if (!isAValidPayload && payloadLength !== 3) {
            return {error: "necesitan tener un valor válido"};
        } else if (Object.values(payload).some(value => value === null)) {
            return {error: "necesitan tener un valor válido"};
        }
    }
  }
}

module.exports = UserView;