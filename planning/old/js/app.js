/*--------------Modules--------------*/


/* Main StatusLex App Module */
var statuslex = angular.module('statuslex', [ 'ngRoute', 'slControllers', 'slServices']);

/* Controllers Module */
var slControllers = angular.module('slControllers', []);

/* Services Module */
var slServices = angular.module('slServices', []);

/*--------------Routing--------------*/


statuslex.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    /* Application Record */
      when('/applications/:param', {
        templateUrl: 'templates/applications-record.html',
        controller: 'ApplicationsDetailCtrl'
      }).
      /* About */
      when('/about', {
        templateUrl: 'templates/about.html'
      }).
      /* Everything Else to Home Page */
      otherwise({
        templateUrl: 'templates/applications.html',
        controller: 'ApplicationsCtrl'
      });

  }]);

/*--------------Controllers--------------*/

/* Applications */
slControllers.controller('ApplicationsCtrl', ['$scope', '$http','$filter',
  function ($scope, $http, $filter) {
  $scope.test = 'ApplicationsTest'
}

]);

/* Applications Detail */
slControllers.controller('ApplicationsDetailCtrl', ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {
  $scope.test = "Application Detail Test"
  }
]);

/*--------------Filters--------------*/

/* titlecase filter */
statuslex.filter('titlecase', function () {
  return function (input) {
    var bigwords = /\b(LFUCG|ac|aka|llc|hvac|[a-z]\/[a-z]|i|ii|iii|iv|v|vi|vii|viii|ix)\b/i;
	var smallwords = /\b(an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|to|vs)\b/i;
    var words = input.toLowerCase().split(' ');
    for (var i = 0; i < words.length; i++) {
      if (words[i].match(bigwords) !== null) {words[i] = words[i].toUpperCase()}
      else if (words[i].match(smallwords) !== null)	{words[i] = words[i].toLowerCase()}
      else {words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)}
    }
    return words.join(' ');
  }
});

/*--------------Services--------------*/