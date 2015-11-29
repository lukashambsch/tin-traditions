(function() {
  angular.module('app.item')
    .directive('itemView', [itemView])
    .directive('itemEdit', [itemEdit]);

  function itemView () {
    return {
      restrict: 'E',
      templateUrl: 'js/item/item-view.html'
    }
  }

  function itemEdit () {
    return {
      restrict: 'E',
      templateUrl: 'js/item/item-edit.html'
    }
  }
})();
