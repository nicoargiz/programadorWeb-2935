var squareJQNode = $('.square')

squareJQNode.click(tateti)

var valor = true

function tateti (event) {
  var squareTateti = $(this)

  if (valor === true) {
    squareTateti.addClass('cross')
    valor = false
  } else {
    squareTateti.addClass('circle')
    valor = true
  }
}

var clearButtonJQNode = $('input')

clearButtonJQNode.click(borrar)

function borrar (event) {
  squareJQNode.removeClass('cross circle')
}
