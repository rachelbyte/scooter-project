const User = require('../src/User')

describe('The User class properties', () => {

    const rachel = new User ("scratchie99", "Multiverse", 23)
    test ('the username property', () => {

        expect(rachel.username).toBe("scratchie99")

    })

    test('the password property', () => {

    expect(rachel.password).toBe("Multiverse")

    }) 

    test('the age property', () => {

    expect(rachel.age).toEqual(23)

    })

})
