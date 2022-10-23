const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

describe('ScooterApp properties', () => {

    test ('the ScooterApp property stations', () => {

        expect(ScooterApp.stations).toEqual({

            Manhattan: [],
            Brooklyn: [],
            Queens: [],
            Bronx: [],
            StatenIsland: []
          
          })




    }) 
test('the registeredUsers property', () => {


expect(ScooterApp.registeredUsers).toBe([])


})

test(' Check the scootersessions array contains ScooterApp', () => {


    expect(ScooterApp.scooterSessions).toContain(ScooterApp)

})


})


describe('The register user function', () => {

    test('if the user has not been registered yet', () => {

        expect(register(user)).toBe("user has been registered")

    })

    test('if the user is underage' , () => {

    expect(register(16)).toBe("too young to register!")

    })

test('if the user has already been registered', () => {



    expect(register(this.registeredUsers.includes(user))).toBe("already registered!")
})



})

describe('the login function', () => {

    let rachel = new User ("scratchie99", "aline")
expect(ScooterApp.login(rachel.username, rachel.password)).toBe("User has logged in successfully")
expect(ScooterApp.login(username, password)).toThrow("Username or password is incorrect.")


})



// add scooter

// remove scooter
