console.log('Hola Tero')

var examNotes = [7, 5, 6, 4, 3, 2, 8]


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
promedio(examNotes)

console.log(prom)







