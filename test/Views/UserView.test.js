const UserView = require("../../app/Views/UserView");

describe("Tests for User View", () => {

    //1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
    test("1) Return an error object when try to create a user with a null payload", () => {
        const payload = null;
        const create_User = UserView.createUser(payload);
        expect(create_User.error).toMatch(/payload no existe/);
    });
});