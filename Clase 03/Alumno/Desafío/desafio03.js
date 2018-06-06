var operation = prompt('Elija una operación. sum, res, mul, div')
var num1 = prompt('Elija el primer número')
var num2 = prompt('Elija el segundo número')

parsedNum1 = parseFloat(num1, 10)
parsedNum2 = parseFloat(num2, 10)

switch (operation) {
  case 'sum':
    console.log(parsedNum1 + parsedNum2)
    break
  case 'res':
    console.log(parsedNum1 - parsedNum2)
    break
  case 'mul':
    console.log(parsedNum1 * parsedNum2)
    break
  case 'div':
    if (parsedNum2 === 0) {
      do {
        num3 = prompt('Ingrese otro número')
        parsedNum3 = parseFloat(num3, 10)
        console.log(parsedNum1 / parsedNum3)
      } while (parsedNum3 === 0)
    } else {
      console.log(parsedNum1 / parsedNum2)
    } break
}
