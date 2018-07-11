$(document).ready(function () {
  console.log('Ejercicio 13')

  var counterNode = $('#counter')
  var bodyNode = $('body')
  counter = 0
  bodyNode.keydown(movingCounter)

  function movingCounter (event) {
    pressedKey = event.which

    switch (pressedKey) {
      case 13:
        counter = 0
        break
      case 38:
        counter++
        break
      case 40:
        counter--
        break
    }
    counterNode.html(counter)
  }
})
