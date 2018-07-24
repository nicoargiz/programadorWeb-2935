import crossroads from 'crossroads'

import homeController from './js/controllers/homeController'
import peopleController from './js/controllers/contactController'

$(document).ready(function () {
  console.log('Init app Workshop final')

  crossroads.addRoute('#/people', function () {
    $('#root').load('./partials/people.html', peopleController)
  })

  crossroads.addRoute('/', function () {
    $('#root').load('./partials/home.html', homeController)
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
})
