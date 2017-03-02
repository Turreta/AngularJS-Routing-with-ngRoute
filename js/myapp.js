(function() {
    
    // Instantiate our main module and pass ngRoute
    var myapp = angular.module('myapp', ['ngRoute']);
    
    
    // Define the routes here
    myapp.config(function ($routeProvider) {
        
        // The "root" or default route uses the content of main.html for display
        $routeProvider.when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        });
        
         // The "second" route uses the content of second.html for display
        $routeProvider.when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
    });
    
    // This ties up to "/" route
    myapp.controller('mainController', ['$scope', '$log', function($scope, $log) {
        $scope.name = 'Main';
    }]);

    // This ties up to "/second" route
    myapp.controller('secondController', ['$scope', '$log', function($scope, $log) {
        $scope.name = 'Second';    
    }]);
})();
