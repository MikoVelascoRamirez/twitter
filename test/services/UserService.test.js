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

  //Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.

  test("2) Getting user data in a list", () => {
    const user = UserService.create(1, "mikovelra", "Miguel Arturo");
    const userInfoList = UserService.getInfo(user);

    expect(userInfoList[0]).toBe(1);
    expect(userInfoList[1]).toBe("mikovelra");
    expect(userInfoList[2]).toBe("Miguel Arturo");
    expect(userInfoList[3]).toBe("Sin bio");

    //Revisamos si los datos de tipo fecha no están indefinidos
    expect(userInfoList[4]).not.toBeUndefined();
    expect(userInfoList[5]).not.toBeUndefined();
  });

  //Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 

  test("3) Updating user username", () => {
    const user = UserService.create(2, "Gerry", "Gerard");
    const newUsername = "Gerry3FCB"
    UserService.updateUserUsername(user, newUsername);

    expect(user.username).toBe(newUsername);
  });

  //Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos.

  test("4) Getting all usernames of a User List", () => {
      const userMiko = UserService.create(1, "Miko", "Miguel Arturo");
      const userGerard = UserService.create(2, "Gerry", "Gerard Piqué");
      const userJalife = UserService.create(3, "a.jalife", "Alfredo Jalife-Rahmé");

      const listOfUsers = [userMiko, userGerard, userJalife];
      const getUsernames = UserService.getAllUsernames(listOfUsers);

      expect(getUsernames).toStrictEqual(["Miko", "Gerry", "a.jalife"]);
  });

});