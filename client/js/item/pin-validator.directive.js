(function () {
  angular.module('app.item')
    .directive('pinValidator', ['$http', '$q', pinValidator]);

  function pinValidator ($http, $q) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        ngModel.$asyncValidators.pin = function (modelValue, viewValue) {
          return $http.post('api/giftEntries/check-pin', {giftEntry: {itemId: scope.vm.giftEntry.itemId, pin: viewValue}})
            .then(function (response) {
              if (!response.data.valid) {
                return $q.reject(response.data.errorMessage);
              }
              return true;
            });
        }
      }
    }
  }
})();
