var numbers = [ 1, 2, 3, 4, 5 ]
var noArray = 'No soy un array'

// deleteElement(2, numbers)  Devuelve un nuevo Array [1,2,4,5]

function deleteElement (index, hola) {
  if (Array.isArray(hola) && typeof index === 'number') {
    var hola1 = hola.slice()
    hola1.splice(index, 1)
    return hola1
  } else {
    return hola
  }
}

console.log(deleteElement(2, numbers))
console.log(deleteElement(3, noArray))
