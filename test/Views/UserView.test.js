const UserView = require("../../app/Views/UserView");

describe("Tests for User View", () => {

    //1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
    test("1) Return an error object when try to create a user with a null payload", () => {
        const payload = null;
        const create_User = UserView.createUser(payload);
        expect(create_User.error).toMatch(/payload no existe/);
    });

    //2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.

    test("2) Return an error if some of Payload's keys contains a null value", () => {
        const payload = {id: 2, username: null, name: "Didí"};
        const createUser = UserView.createUser(payload);
        expect(createUser.error).toMatch(/necesitan tener un valor válido/);
    });
});