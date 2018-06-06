console.log('Init apppp')

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

var day

for (var i = 0; i < daysOfTheWeek.length; i++) {
  day = daysOfTheWeek[i]
  switch (day) {
    case 'Lunes':
    case 'Martes':
    case 'Miercoles':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':
      console.log(day + ' es día de semana')
      break
    case 'Sabado':
    case 'Sábado':
    case 'Domingo':
      console.log(day + ' es fin de semana')
      break
    default:
      console.log(day + ' no es un día válido')
      break
  }
}
