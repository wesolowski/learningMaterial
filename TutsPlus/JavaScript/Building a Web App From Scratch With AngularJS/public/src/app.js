angular.module('ContactsApp', [])
    .run(function($rootScope){
        $rootScope.message = "Hello Angular!";
    });
