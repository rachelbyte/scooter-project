class Scooter{
  constructor(station, user) {
    this.station = station
    this.user = user
    this.serial = Math.floor(Math.random()* 1000)
    this.charge = Math.floor(Math.random()* 100)
    this.isBroken = false
    this.docked = true

  }

rent () {

  if (this.isBroken === false && this.charge > 20) {

    console.log("Enjoy the ride!")
  } else if (this.charg <= 20) {

throw new Error('Scooter low on battery, please charge.')

  } else {

    throw new Error("Scooter is broken, please send a repair request.")
  }
}

dock(station) {

  this.station = station 

  if (station === undefined) {

throw new Error('Docking station required!')

  }

  this.docked = true
  this.user = ""

}

async recharge () {

console.log('Starting recharge...')

await new Promise(resolve  => setTimeout(resolve, 2000));

this.charge = 100


console.log('Recharge complete')

}

async requestRepair () {

console.log('Starting repair...')

await new Promise(resolve => setTimeout(resolve, 2000))

console.log('Repair complete')
this.isBroken = false

}

}


module.exports = Scooter
