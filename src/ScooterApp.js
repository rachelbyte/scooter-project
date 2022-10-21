const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor () {
    ScooterApp.scooterSessions.push(ScooterApp)
    this.stations = {

      Manhattan: [],
      Brooklyn: [],
      Queens: [],
      Bronx: [],
      StatenIsland: []
    
    }

    this.registeredUsers = []

  }

register(user) {

  if (this.registeredUsers.includes(user)) {

    console.log("already registered!")
  } else if (user.age < 17 ) {

    console.log("too young to register!")
  } else {


    this.registeredUsers.push(user)
    console.log("user has been registered")
  }


}

login(username,password) {


let user = User
if (this.registeredUsers.includes(user) && user.username === username && user.password === password  ) {

  console.log("User has logged in successfully")
} else {

  throw new Error("Username or password is incorrect.")
}

}

// addScooter(location, scooter) {

// Scooter.station = location
// this.stations = scooter

// }


// removeScooter (scooterToRemove) {

// let val = scooterToRemove.serial

// delete location[Scooter.station][val]


// }

 static scooterSessions = []

}

module.exports = ScooterApp
