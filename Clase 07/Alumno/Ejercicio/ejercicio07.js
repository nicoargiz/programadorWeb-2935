console.log('Hola Tero. Ej 07')

var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

var cualquiera = 718291

// Guarda la lista en el localStorage en formato JSON

function saveLocalList (llave, arreglo) {
  if (typeof llave === 'string' && Array.isArray(arreglo)) {
    var stringifyArreglo = JSON.stringify(arreglo)

    localStorage.setItem(llave, stringifyArreglo)
  } else {
    return console.log('Algo pusiste mal')
  }
}

saveLocalList('list', studentsList)
// saveLocalList(2, studentsList)
// saveLocalList('lista', cualquiera)
