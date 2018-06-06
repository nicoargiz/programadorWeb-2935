// # Repaso de Git y GitHub
// - git add .
// - git commit -m "Mensaje"
// - git push
// - git pull
// - git pull <repo> <branch>
// - ¿Como solucionar conflictos?

// # Bucles e iteración

console.log('Init app')

// 1. Sentencias de blucle
//  - while

<<<<<<< HEAD
// var counter = 1

// while (counter <= 6) {
//   console.log(counter)
//   counter = counter + 1
=======
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)

// var couter = 1

// while (couter <= 6) {
//   console.log(couter)
//   couter = couter + 1
>>>>>>> 687308a536ea71d06d2432b2601e1d840dbdebfa
// }

// var name = prompt('Ingrese su nombre')

<<<<<<< HEAD
// while (!name) {
//   name = prompt('Ingrese su nombre')
// }

// console.log('Hola ' + name)

=======
// var parsedName = parseFloat(name, 10)

// console.log(parsedName, isNaN(parsedName))

// while (!name || (name && !isNaN(parsedName))) {
//   name = prompt('Ingrese su nombre')
// }

>>>>>>> 687308a536ea71d06d2432b2601e1d840dbdebfa
//  - do while

// var name

// do {
<<<<<<< HEAD
//   name = prompt('Ingrese su nombre')
// } while (!name)
=======
//   name = prompt('Ingresá tu contraseña y que sea minímo 6 catacteres')
// } while (!name || name.length < 6)
>>>>>>> 687308a536ea71d06d2432b2601e1d840dbdebfa

// console.log('Hola ' + name)

//  - for

<<<<<<< HEAD
=======
// (i++) === (i = i + 1)

>>>>>>> 687308a536ea71d06d2432b2601e1d840dbdebfa
// for (var i = 0; i < 3; i++) {
//   console.log(i)
// }

<<<<<<< HEAD
var students = ['Adrian', 'Javier', 'Alicia', 'Pepe']
var = student

for (var i = 0; i < students.length; i++) {
  student = students[i]
  console.log(student + ' es un alumno')
}

=======
// console.log(students[0])
// console.log(students[1])
// console.log(students[2])

// var students = [ 'Costanza', 'Javier', 'Marcela', 'Ramiro', 'Enzo' ]

// var student

// for (var i = 0; i < students.length; i++) {
//   student = students[i]
//   console.log(student)
// }

// var students = [ 'Adrián', 'Costanza', 'Javier', 'Marcela', 'Ramiro', 'Enzo' ]

// var student

// for (var i = 0; i < students.length; i++) {
//   student = students[i]

//   if (student !== 'Adrián') {
//     console.log(student + ' es un alumno')
//   }
// }
>>>>>>> 687308a536ea71d06d2432b2601e1d840dbdebfa

// 2. Sentencias de corte
//  - break

// var students = [ 'Adrián', 'Costanza', 'Javier', 'Marcela', 'Ramiro', 'Enzo' ]

// var student

// var index = -1

// for (var i = 0; i < students.length; i++) {
//   student = students[i]

//   if (student === 'Costanza') {
//     index = i
//     break
//   }
// }

// if (index !== -1) {
//   console.log('Te encontré en la posición ' + index)
// } else {
//   console.log('No te encontré')
// }

//  - continue

// var students = [ 'Adrián', 'Costanza', 'Javier', 'Marcela', 'Ramiro', 'Enzo' ]

// var student

// for (var i = 0; i < students.length; i++) {
//   student = students[i]

//   if (student === 'Costanza' || student === 'Javier') {
//     continue
//   }
//   console.log('Nombre ' + student)
// }
