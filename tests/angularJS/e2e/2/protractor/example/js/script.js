angular.module('bindHtmlExample', ['ngSanitize'])
.controller('ExampleController', ['$scope', function($scope) {
  $scope.myHTML =
     'I am testing my loyalty service html (link) string from  ' +
     '<a href="#">My Account Loyalty Hub URL';
}]);