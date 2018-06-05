var dia = prompt('Decime un día de la semana')

switch (dia) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log(dia + ' es un día de semana')
    break
  case 'sabado':
  case 'domingo':
    console.log(dia + ' es un dia de joda')
    break
  default:
    console.log('sos un gil')
    break
}
