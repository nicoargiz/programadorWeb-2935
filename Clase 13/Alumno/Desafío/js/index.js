$(document).ready(function () {
  console.log('Desafío 13')

  nameInputNode = $('#firstName')
  nameInputNode.one('blur', validateField)

  emailInputNode = $('#email')
  emailInputNode.one('blur', validateEmailField)

  commentsInputNode = $('#comments')
  commentsInputNode.one('blur', validateField)

  submitButtonNode = $('#submitButton')

  //FUNCION VALIDA CAMPO EMAIL

  function validateEmailField (event) {
    var inputNode = $(this)
    var value = inputNode.val()

    inputNode.next().remove()

    var errorText = ''

    if (!value) {
      errorText = 'El campo está vacío'
    } else {
      if (value.indexOf('@') === -1) {
        errorText = 'Falta el arroba (@) '
      }
      if (value.indexOf('.') === -1) {
        errorText = errorText + 'Falta el punto (.)'
      }
    }

    if (errorText) {
      var parentNode = inputNode.parent()
      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')

      inputNode.removeClass('is-valid')
      inputNode.addClass('is-invalid')
    } else {
      inputNode.removeClass('is-invalid')
      inputNode.addClass('is-valid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmailField)
    }

    validateButton()
  }

  //FUNCION VALIDA CAMPO NOMBRE Y COMENTARIO

  function validateField (event) {
    var inputNode = $(this)
    var value = inputNode.val()

    inputNode.next().remove()

    var errorText = ''

    if (!value) {
      errorText = 'El campo está vacío'
    }

    if (errorText) {
      var parentNode = inputNode.parent()
      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')

      inputNode.removeClass('is-valid')
      inputNode.addClass('is-invalid')
    } else {
      inputNode.removeClass('is-invalid')
      inputNode.addClass('is-valid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateField)
    }
    validateButton()
  }

  //FUNCION QUE VALIDA BOTON

  function validateButton () {
    isValidInputNodes = $('.is-valid')

    if (isValidInputNodes.length === 3) {
      submitButtonNode.attr('disabled', false)
    } else {
      submitButtonNode.attr('disabled', true)
    }
  }
})
