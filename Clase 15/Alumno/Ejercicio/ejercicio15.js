$(document).ready(function () {
  var baseUrl = 'https://swapi.co/api/' + 'people/'
  var people

  getData(baseUrl, showCharacter)

  function showCharacter (result) {
    for (i = 0; i < result.length; i++) {
      people = result[i]
      console.log(people)
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
