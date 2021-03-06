import { getLocalList, setLocalList } from '../utils/localStorage'

import { genderTranslate, eyeColorTranslate } from '../utils/translates'

import { searchPeopleIndexByUrl } from '../utils/search'

function localStorageController () {
  console.log('Soy el localStorage')

  var peopleList = getLocalList('peopleList')

  console.log(peopleList)

  var tableBody = $('#tableBody')

  for (var i = 0; i < peopleList.length; i++) {
    var person = peopleList[i]

    tableBody.append(
      '<tr id="' +
        person.url +
        '"><th scope="row" >' +
        person.url.slice(28, -1) +
        '</th><td>' +
        person.name +
        '</td><td>' +
        genderTranslate(person.gender) +
        '</td><td>' +
        person.height +
        ' cm</td><td>' +
        person.mass +
        ' kg</td><td>' +
        eyeColorTranslate(person.eye_color) +
        '</td><td><button type="button" class="btn btn-danger">Eliminar</button></td></tr>'
    )
  }

  $('.btn-danger').click(function () {
    console.log('Me apretaron')
    var buttonNode = $(this)

    var rowNode = buttonNode.parent().parent()

    var id = rowNode.attr('id')

    var index = searchPeopleIndexByUrl(id, peopleList)

    if (index !== -1) {
      peopleList.splice(index, 1)

      setLocalList('peopleList', peopleList)

      rowNode.remove()
    }
  })
}

export default localStorageController
