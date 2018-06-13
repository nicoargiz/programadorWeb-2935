console.log('Hola Tero 05')

var cars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: 'Audi TT',
    brand: 'Audi',
    year: 2017
  },
  {
    model: 'Gran turismo',
    brand: 'Maserati',
    year: 2018
  }
]

// var suran = new Car('Suran', 'volkswagen', 2015)
// var audi = new Car('Audi TT', 'Audi', 2017)

function Car (model, brand, year) {
  id = Math.random()
  this.getId = function () {
    return id
  }
  this.getCarName = function () {
    return 'MODELO ' + model + ' MARCA  ' + brand + ' AÑO ' + year
  }
}

var newCars = []
var car
var newCar

for (i = 0; i < cars.length; i++) {
  car = cars[i]
  newCar = new Car(car.model, car.brand, car.year)
  newCars.push(newCar)
}

console.log(newCars[0].getId())
console.log(newCars[2].getCarName())
