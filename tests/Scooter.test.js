const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('Scooter object properties', () => {
  test('The Scooter object station', () => {
    expect(Scooter.station).toBe(Scooter.station);
  })

  test('The scooter object user', () => {
  expect(Scooter.user).toBe(Scooter.user)

  })

  test('The Scooter\'s serial number', () => {
    expect(Scooter.serial).toBe(Scooter.serial)
  })

  test('The Scooters charge', () => {

  expect(Scooter.charge).toBe(Scooter.charge)

  })

  test('Checks if the Scooter is broken', () => {

    expect(Scooter.isBroken).toBe(false)
  })

  test('Checks if the Scooter is docked', () => {

    expect(Scooter.docked).toBe(true)
  })


})

//Method tests
describe('Scooter methods', () => {


  test('the rent method', () => {

  expect(rent()).toBe("Enjoy the ride!")
  expect(rent()).toThrow('Scooter low on battery, please charge.')
  expect(rent()).toThrow("Scooter is broken, please send a repair request.")

  })


  test('the dock method', () => {

    expect(dock(station)).toThrow("Docking station required!")
    expect(dock(station)).toBe(Scooter.station)
    expect(Scooter.docked).toBe(true)
    expect(Scooter.user).toBe("")
  })


  test("requestRepair", async () => {

    const scoot = new Scooter();

    await scoot.requestRepair(); // wait for it to be repaired

    expect(scoot.requestRepair).toBe("Repair complete")
    expect(Scooter.isBroken).toBe(false)


  })
  //requestRepair method

 
  test("charge", async () => {
    const scooter = new Scooter();
    await scooter.charge(); // we need to wait for the charge!
    expect(scooter.charge).toBe(100);
});

})
