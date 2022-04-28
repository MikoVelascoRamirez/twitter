const UserService = require("../../app/services/UserService");

describe("Tests for UserService", () => {
  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "mikovelra", "Miguel Arturo");

    /* Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.

    Criterios de aceptación:
    1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`.
    2. El valor de `bio` deberá ser por default para todos los `user` creados. */

    expect(user.id).toBe(1);
    expect(user.username).toBe("mikovelra");
    expect(user.name).toBe("Miguel Arturo");
    expect(user.bio).not.toBeUndefined();
  });
});