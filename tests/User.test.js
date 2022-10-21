const User = require('../src/User')

describe('The User class properties', () => {

    test ('the username property', () => {

        expect(User.username).toBe(username)

    })

    test('the password property', () => {

    expect(User.password).toBe(password)

    }) 

    test('the age property', () => {

    expect(User.age).toEqual(User.age)

    })

})
