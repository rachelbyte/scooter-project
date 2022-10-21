const User = require('../src/User')

describe('The User class properties', () => {

    const rachel = new User ("scratchie99", "C0raline", 23)
    test ('the username property', () => {

        expect(rachel.username).toBe("scratchie99")

    })

    test('the password property', () => {

    expect(rachel.password).toBe("C0raline")

    }) 

    test('the age property', () => {

    expect(rachel.age).toEqual(User.age)

    })

})
