const User = require('../../app/models/User');

describe("Test suite for USER Class", () =>{

    //Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
    test("1) Creating a User's object - not undefined values", () =>{
        const usuario = new User(20, "Neko", "Nekotina", "The Neko's biography");
        expect(usuario.id).not.toBeUndefined();
        expect(usuario.username).not.toBeUndefined();
        expect(usuario.name).not.toBeUndefined();
        expect(usuario.bio).not.toBeUndefined();
        expect(usuario.dateCreated).not.toBeUndefined();
        expect(usuario.lastUpdated).not.toBeUndefined();
    })

    test("2) Validating value types are the same", () => {
        const usuario = new User(3, "Mike", "Miguel", "Mike's biography");
        expect(usuario.id).toBe(3);
        expect(usuario.username).toBe("Mike");
        expect(usuario.name).toBe("Miguel");
        expect(usuario.bio).toBe("Mike's biography");
    });
});