var gender = prompt('Ingrese su género', 'Hombre, Mujer, Otro')
var age = prompt('Ingrese su edad')

parsedAge = parseFloat(age, 10)

if (gender === 'Mujer' && parsedAge < 18) {
  console.log('Sra. Usted es MENOR de edad y NO puede ingresar al sitio')
}
if (gender === 'Mujer' && parsedAge > 18) {
  console.log('Sra. Usted es MAYOR de edad y puede ingresar al sitio')
}
if (gender === 'Hombre' && parsedAge < 18) {
  console.log('Sr. Usted es MENOR de edad y NO puede ingresar al sitio')
}
if (gender === 'Hombre' && parsedAge > 18) {
  console.log('Sr. Usted es MAYOR de edad y puede ingresar al sitio')
}
if (gender === 'Otro' && parsedAge < 18) {
  console.log('Sr. Usted es MENOR de edad y NO puede ingresar al sitio')
}
if (gender === 'Otro' && parsedAge > 18) {
  console.log('Sx. Usted es MAYOR de edad y puede ingresar al sitio')
}

