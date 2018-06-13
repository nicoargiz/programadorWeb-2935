console.log('Hola Tero')

var examNotes = [7, 5, 6, 4, 3, 2, 8]
var examNotes2 = [8, 25, 4, 3, 2, 8]


function promedio(examResults) {

  var examResult

  var totalSum = 0

  for (i = 0; i < examResults.length; i++) {
    examResult = examResults[i]
    totalSum = totalSum + examResults[i]
  }

  var examAverage = totalSum / examResults.length
  return examAverage
}

var prom = promedio(examNotes)
var prom2 = promedio(examNotes2)


console.log(prom)
console.log(prom2)







