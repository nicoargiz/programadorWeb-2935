console.log('Hola Tero. D.07')

function getLocalList (buscarLista) {
  if (localStorage.getItem(buscarLista)) {
    var listaEncontrada = localStorage.getItem(buscarLista)
    var listaParseada = JSON.parse(listaEncontrada)
  } else {
    return console.log([])
  }
  console.log(listaParseada)
}

var studentsList = getLocalList('lis') // Debe devolver siempre un Array [] vacío o con elementos [...]
