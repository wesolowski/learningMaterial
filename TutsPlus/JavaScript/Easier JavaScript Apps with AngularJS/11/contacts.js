angular
    .module('contacts', ['ngRoute'])
    .config(function( $routeProvider){
        //Configure the routes
        $routeProvider
            //Edit contact
            .when('/contact/:index', {
                templateUrl: 'edit.html',
                controller: 'Edit'
            })
            .when('/', {
                // List all contacts
                templateUrl: 'list.html'
            });
    })
    .controller('Contacts', function($scope){
        // Contacts is the parent controller, so
        // $scope.contacts is available in all children
        $scope.contacts = [
            {name: 'Tom',     number:  '23489234'},
            {name: 'Jeffrey', number: '12346570'},
            {name: 'Joe',     number: '98764521'}
        ];
    })
    .controller('Edit', function( $scope, $routeParams){
        // Load in a contact from the route (/contact/:index)
        $scope.contact = $scope.contacts[$routeParams.index];
        $scope.index = $routeParams.index;
    });