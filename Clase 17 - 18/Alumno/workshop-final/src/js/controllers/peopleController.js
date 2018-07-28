import { getData } from '../utils/fromApi'

import { setLocalList, getLocalList } from '../utils/localStorage'

import { genderTranslate, eyeColorTranslate } from '../utils/translates'

import { searchPeopleIndexByUrl } from './utils/search'

function peopleController () {
  console.log('Soy People')

  var peopleListArray = []

  getData('https://swapi.co/api/people/', getAllList)

  function getAllList (error, data) {
    if (data.results) {
      showNames(data.results)
      peopleListArray = peopleListArray.concat(peopleListArray, data.results)
    }

    if (data.next) {
      $('#seeMore').one('click', function () {
        getData(data.next, getAllList)
      })
    }
  }

  var tableBody = $('#tableBody')

  function showNames (results) {
    for (var i = 0; i < results.length; i++) {
      var person = results[i]

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
          '</td><td><button type="button" class="btn btn-success">Guardar</button></td></tr>'
      )
    }
  }
  $(document).on('click', '.btn-success', function () {
    console.log('Me apretó')

    var buttonNode = $(this)
    var peopleList = getLocalList('peopleList')
    var rowNode = buttonNode.parent().parent()

    var id = rowNode.attr('id')
    var index = searchPeopleIndexByUrl(id, peopleListArray)

    console.log(index)

    if (index !== -1) {
      peopleList.push(peopleListArray[index])

      setLocalList('peopleList', peopleList)

      rowNode.remove()
    }
  })
}

export default peopleController
