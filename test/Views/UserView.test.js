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

    //3. Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.

    test("3) Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "username"};
        const createUser = UserView.createUser(payload);
        expect(createUser.error).toMatch(/necesitan tener un valor válido/);
    });

    //4. Verifica que se pueda crear un objeto `User`, al enviar un payload con las siguientes propiedades: `username`, `id` y `name`.

    test("4) Creating an User object", () => {
        const payload = {id: 5, username: "some user", name: "user"}
        const userCreated = UserView.createUser(payload);
        expect(userCreated.id).toBe(5)
        expect(userCreated.username).toBe("some user")
        expect(userCreated.name).toBe("user")
    });
});