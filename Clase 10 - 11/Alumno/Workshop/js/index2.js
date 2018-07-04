console.log('Hola Tero. WorkShop')

var KEY = 'studentsList'

var localList = getLocalList(KEY)

var mainListNode = document.getElementById('mainList')

var newStudentsList = []

var localStudent
var newStudent

for (var i = 0; i < localList.length; i++) {
  localStudent = localList[i]
  newStudent = new Student(
    localStudent.firstName,
    localStudent.lastName,
    localStudent.dni,
    localStudent.email
  )
  newStudentsList.push(newStudent)

  var liNode = createStudentNode(newStudent)

  mainListNode.appendChild(liNode)
}

var firstNameInputNode = document.getElementById('firstName')
firstNameInputNode.onblur = validateEmptyField

function validateEmptyField (event) {
  var inputNode = event.target

  if (!inputNode.value) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }
  validateButton()
}

var dniInputNode = document.getElementById('dni')
dniInputNode.onblur = validateDniField

function validateDniField (event) {
  var inputNode = event.target

  var parsedValue = parseInt(inputNode.value, 10)

  if (
    !inputNode.value ||
    parsedValue <= 0 ||
    isNaN(parsedValue) ||
    searchStudentIndexByDni(inputNode.value, newStudentsList) !== -1
  ) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }
  validateButton()
}

var lastNameInputNode = document.getElementById('lastName')

var emailInputNode = document.getElementById('email')
emailInputNode.onblur = validateEmailField

/**
 * Defino la función que valida el email
 * @param { Event } event 
 */
function validateEmailField (event) {
  var inputNode = event.target

  // Si el campo no tiene valor, arroba o punto le saco la clase is-valid (si la tiene)
  // y le agrego la is-invalid
  if (
    !inputNode.value ||
    inputNode.value.indexOf('@') === -1 ||
    inputNode.value.indexOf('.') === -1
  ) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
  validateButton()
}

var addStudentButtonNode = document.getElementById('addStudentButton')

function validateButton () {
  var isValidInputNodes = document.getElementsByClassName('is-valid')

  if (isValidInputNodes.length === 3) {
    addStudentButtonNode.disabled = false
  } else {
    addStudentButtonNode.disabled = true
  }
}

addStudentButtonNode.onclick = addStudent

function addStudent (event) {
  var firstName = firstNameInputNode.value
  var dni = dniInputNode.value
  var lastName = lastNameInputNode.value
  var email = emailInputNode.value

  var newStudent = new Student(firstName, lastName, dni, email)

  newStudentsList.push(newStudent)

  var liNode = createStudentNode(newStudent)

  liNode.id = dni

  mainListNode.appendChild(liNode)

  setLocalList(KEY, newStudentsList)

  firstNameInputNode.value = ''
  dniInputNode.value = ''
  lastNameInputNode.value = ''
  emailInputNode.value = ''

  firstNameInputNode.classList.remove('is-valid')
  dniInputNode.classList.remove('is-valid')
  emailInputNode.classList.remove('is-valid')
  addStudentButtonNode.disabled = true
}

var removeStudentNode = document.getElementById('dniRemove')

removeStudentNode.onblur = validateDniRemoveField
var dniRemoveButtonNode = document.getElementById('dniRemoveButton')

function validateDniRemoveField (event) {
  var inputNode = event.target
  var parsedValue = parseInt(inputNode.value, 10)

  if (
    !parsedValue ||
    isNaN(parsedValue) ||
    searchStudentIndexByDni(inputNode.value, newStudentsList) === -1
  ) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
    dniRemoveButtonNode.disabled = true
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
    dniRemoveButtonNode.disabled = false
  }
  // validateRemoveButton()
}

// function validateRemoveButton () {
//   var isValidDniRemoveField = document.getElementsByClassName('is-valid')
//   if (isValidDniRemoveField.length === 1) {
//     dniRemoveButtonNode.disabled = false
//   } else {
//     dniRemoveButtonNode.disabled = true
//   }
// }

dniRemoveButtonNode.onclick = deleteStudent

function deleteStudent (event) {
  var removeDni = removeStudentNode.value

  newStudentsList.splice(searchStudentIndexByDni(removeDni, newStudentsList), 1)

  var liNode = document.getElementById(removeDni)

  liNode.parentNode.removeChild(liNode)

  setLocalList(KEY, newStudentsList)

  removeStudentNode.value = ''
  removeStudentNode.classList.remove('is-valid')
  dniRemoveButtonNode.disabled = true
}

// BUSQUEDA

searchStudentInputNode = document.getElementById('searchStudent')
searchStudentButtonNode = document.getElementById('searchStudentButton')
searchListNode = document.getElementById('searchList')

searchStudentButtonNode.onclick = searchStudent

function searchStudent (event) {
  searchedStudent = searchStudentInputNode.value

  searchListNode.innerHTML = ''

  var foundStudent = searchStudentIndexByText(searchedStudent, newStudentsList)

  if (!searchedStudent || foundStudent === -1) {
    alert('Alumno no existe')
  } else {
    var foundStudentNode = createStudentNode(newStudentsList[foundStudent])
    searchListNode.appendChild(foundStudentNode)
  }
}

/**
 * Función que permite buscar la posición de un estudiante en el array,
 * comparando nombre o apellido por valor exacto
 * @param {String} nameOrLastName 
 * @param {Array} studentsList 
 */

function searchStudentIndexByText (nameOrLastName, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (
      includesText(nameOrLastName, student.firstName) ||
      includesText(nameOrLastName, student.lastName)
    ) {
      index = i
      break
    }
  }
  return index
}

function includesText (text, baseText) {
  // Valido que ambos parámetros sean string
  if (typeof text === 'string' && typeof baseText === 'string') {
    // Verifico si el primer parámetro se encuentra dentro del segundo
    var textUpperCase = text.toUpperCase()
    var baseTextUpperCase = baseText.toUpperCase()
    if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// FUNCIONES

function searchStudentIndexByDni (dni, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.dni === dni) {
      index = i
      break
    }
  }
  return index
}

/**
 * Función que devuelve nodos li
 * @param { Student } newStudent
 * @returns Node
 */
function createStudentNode (newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.getId()

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    newStudent.getFullName() +
    '</h1><h3>DNI:' +
    newStudent.dni +
    '</h3><p>E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}

function Student (firstName, lastName, dni, email) {
  // Propiedades privadas
  var id = dni

  // Propiedades públicas
  this.firstName = firstName

  if (lastName) {
    this.lastName = lastName
  }

  this.dni = dni

  if (email) {
    this.email = email
  }

  // Métodos públicos
  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    return (this.firstName || '') + ' ' + (this.lastName || '')
  }
}

/**
 * Defino la función getLocalList
 * @param { string } key 
 */
function getLocalList (key) {
  // Valido que reciba un string
  if (typeof key === 'string') {
    // Trato de recuperar la lista del localStorage
    var localList = localStorage.getItem(key)
    if (localList) {
      // Si la lista existía la tranformo en JavaScript y la devuelvo
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      // Sino existía devuelvo un array vacío
      return []
    }
  }
}

/**
 * Defino la función setLocalList
 * @param { string } key 
 * @param { array } list 
 */
function setLocalList (key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}
