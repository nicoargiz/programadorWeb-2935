$(document).ready(function () {
  var baseUrl = 'https://swapi.co/api/' + 'people/5'

  getData(baseUrl, getInfo)

  function showCharacter (result) {
    var character = result.name
  }

  function getInfo (error, data) {
    if (!error) {
      showCharacter(data.name)
    } else {
      console.log('Error', error)
    }
  }

  function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }
})
