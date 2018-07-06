console.log('Hola Tero. Desafío 12')

var inputEmailNode = $('#email')

inputEmailNode.blur(validateEmailField)

function validateEmailField (event) {
  inputEmail = event.target

  if (
    !inputEmail.value ||
    inputEmail.value.indexOf('@') === -1 ||
    inputEmail.value.indexOf('.') === -1
  ) {
    inputEmailNode.addClass('is-invalid')
    inputEmailNode.removeClass('is-valid')
  } else {
    inputEmailNode.addClass('is-valid')
    inputEmailNode.removeClass('is-invalid')
  }
}
