$(document).ready(function () {
  var deleteButtonNode = $('#deleteButton')
  var tableNode = $('#tableBody')

  deleteButtonNode.click(removeElementWithAnimation)

  function removeElementWithAnimation (event) {
    tableNode.fadeOut(2000, removeFromDom)
  }

  function removeFromDom () {
    tableNode.remove()
  }
})
