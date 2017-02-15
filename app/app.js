var demoApp = angular.module('sessions', ['ngRoute']);

// ROUTING
demoApp.config(function ($routeProvider) {
    $routeProvider
    .when('/',
        {
            controller: 'SessionsCtrl',
            templateUrl: 'app/usersessions/usersessions.html'
        })      
    .otherwise({ redirectTo: '/' });
});

