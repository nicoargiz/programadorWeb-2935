console.log('Hola Tero D.06')

// includesText('Pa', 'Patricia') Deberá devolver true

// includesText('Patricia', 'Pa') Deberá devolver false

// includesText(2, 'Pa') Deberá devolver false

function busqueda (buscaEsto, enEsto) {
  if (typeof buscaEsto === 'string' && typeof enEsto === 'string') {
    buscaEstoMayus = buscaEsto.toUpperCase()
    enEstoMayus = enEsto.toUpperCase()

    if (enEstoMayus.indexOf(buscaEstoMayus) >= 0) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

console.log(busqueda('Pa', 'Patricia'))
console.log(busqueda('pa', 'Patricia'))
console.log(busqueda('Patricia', 'Pa'))
console.log(busqueda(2, 'Pa'))
