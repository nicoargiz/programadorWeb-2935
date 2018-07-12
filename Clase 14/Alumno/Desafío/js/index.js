$(document).ready(function () {
  var tableNode = $('#tableBody')

  tableNode.click(removeElementWithAnimation)

  function removeElementWithAnimation (event) {
    tableNode.fadeOut(2000, removeFromDom)
  }

  function removeFromDom () {
    tableNode.remove()
  }
})
