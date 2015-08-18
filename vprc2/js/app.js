/*--------------Modules--------------*/


/* Main StatusLex App Module */
var planning = angular.module('planning', [ 'ngRoute', 'plControllers', 'smart-table']);

/* Controllers Module */
var plControllers = angular.module('plControllers', []);

/* Services Module */
var plServices = angular.module('plServices', []);

/*--------------Routing--------------*/


planning.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    /* Application Record */
      when('/properties/:param', {
        templateUrl: 'templates/property-record.html',
        controller: 'ApplicationsDetailCtrl'
      }).
      /* About */
      when('/about', {
        templateUrl: 'templates/about.html'
      }).
      /* Applications */
      when('/properties', {
        templateUrl: 'templates/properties.html',
        controller: 'ApplicationsCtrl'
      }).
      /* Everything Else to Home Page */
      otherwise({
        redirectTo: '/properties',
      });
  }]);

/*--------------Controllers--------------*/

/* Applications */
plControllers.controller('ApplicationsCtrl', ['$scope',
  function ($scope) {
  var table = Tabletop.init( { 
                       key: 'https://docs.google.com/spreadsheets/d/1Zk739Z7FzBaexu4mvakROhwj6WwCrCk4BFVX96fawEo/pubhtml',
                       callback: function(data, tabletop) {
                        console.log(data)
                        $scope.rowCollection = data;
                        $scope.displayedCollection = [].concat($scope.rowCollection);
                        $scope.itemsByPage=25;
                        $scope.$apply()},
                       simpleSheet: true,
                       parseNumbers: true,
                       wanted: ["Properties"]
                   })

   }]);

/* Applications Detail */
plControllers.controller('ApplicationsDetailCtrl', ['$scope', '$http', '$routeParams', '$sce',
  function ($scope, $http, $routeParams, $sce) { 
  
var property = Tabletop.init( { 
                       key: 'https://docs.google.com/spreadsheets/d/1Zk739Z7FzBaexu4mvakROhwj6WwCrCk4BFVX96fawEo/pubhtml',
                       callback: function(data, tabletop) {
                        $scope.address= data[0].Address
                        $scope.status= data[0].Status
                        $scope.statusdate= data[0].StatusDate
                        $scope.parcelid= data[0].ParcelID
                        $scope.water = data[0].DaysWater
                        $scope.$apply() 
                        },
                       simpleSheet: true,
                       parseNumbers: true,
                       wanted: ["Properties"],
                       query: 'parcelid = ' + $routeParams.param
                   })

var inspection = Tabletop.init( { 
                       key: 'https://docs.google.com/spreadsheets/d/1Zk739Z7FzBaexu4mvakROhwj6WwCrCk4BFVX96fawEo/pubhtml',
                       callback: function(data, tabletop) {
                        $scope.inspections = data
                        $scope.location = $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/place?q=' + data[0].Address +  'Lexington KY United States &key=AIzaSyDXqhUx3ZQwPBtAVsXg6tz9N_2yvrRydcQ')
                        $scope.$apply() 
                        },
                       simpleSheet: true,
                       parseNumbers: true,
                       wanted: ["Inspections"],
                       query: 'parcelid = ' + $routeParams.param
                   })

var CodeURL = 'http://www.civicdata.com/api/action/datastore_search_sql?sql=SELECT * FROM "ad346da7-ce88-4c77-a0e1-10ff09bb0622" WHERE "parcelId"  =\'' + $routeParams.param + '\' ORDER BY "StatusDate" DESC'
    $http.get(CodeURL).success(function(data) {
    $scope.codecases = data.result.records
    });

var BIURL = 'http://www.civicdata.com/api/action/datastore_search_sql?sql=SELECT * FROM "2691aff1-e555-48d3-9188-aebf1fa8323e" WHERE "parcelId"  =\'' + $routeParams.param + '\' ORDER BY "Date" DESC'
    $http.get(BIURL).success(function(data) {
    console.log(data.result.records)
    $scope.permits = data.result.records
    });

  }]);

/*--------------Filters--------------*/

/* titlecase filter */
planning.filter('titlecase', function () {
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
