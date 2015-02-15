angular.module('ContactsApp', ['ngRoute', 'ngResource'])
    .config(function($routeProvider, $locationProvider){
         $routeProvider
             .when('/contacts', {
                 controller: 'ListController',
                 templateUrl: 'views/list.html'
             })
             .when('/contact/new', {
                 controller: 'NewController',
                 templateUrl: 'views/new.html'
             });
         $locationProvider.html5Mode(true);
    });