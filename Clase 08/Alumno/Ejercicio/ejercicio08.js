console.log('Hola Tero. Ej 08')

var mainListNode = document.getElementById('mainList')
var liNode = document.createElement('li')
liNode.innerHTML = 'Ed'
liNode.className = 'list-group-item'
mainListNode.appendChild(liNode)

var liNode2 = document.createElement('li')
liNode2.innerHTML = 'Edd'
liNode2.className = 'list-group-item'
mainListNode.appendChild(liNode2)

var liNode3 = document.createElement('li')
liNode3.innerHTML = 'Eddy'
liNode3.className = 'list-group-item'
mainListNode.appendChild(liNode3)
