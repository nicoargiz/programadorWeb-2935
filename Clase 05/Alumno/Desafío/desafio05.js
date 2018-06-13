console.log('Hola Tero. Desafío 05')

var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

function Student (firstName, lastName, dni, email) {
  id = Math.random()
  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    return firstName + ' ' + lastName
  }
}

var newStudents = []
var student
var newStudent

for (i = 0; i < students.length; i++) {
  student = students[i]
  newStudent = new Student(
    student.firstName,
    student.lastName,
    student.dni,
    student.email
  )
  newStudents.push(newStudent)
}

console.log(newStudents[0].getId())
console.log(newStudents[1].getFullName())
console.log(newStudents[2].getFullName())
