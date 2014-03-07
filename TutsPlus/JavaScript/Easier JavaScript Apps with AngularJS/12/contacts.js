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
            .when('/add', {
                templateUrl: 'edit.html',
                controller: 'Add'
            })
            .when('/delete/:index', {
                templateUrl: 'edit.html',
                controller: 'Delete'
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
    })
    .controller('Add', function( $scope, $routeParams){
        var lenght = $scope.contacts.push({
            name: 'New contacts',
            number: ''
        });
        $scope.contact = $scope.contacts[lenght -1];
        $scope.index = lenght -1;
    })
    .controller('Delete', function( $scope, $routeParams, $location){
        $scope.contacts.splice($routeParams.index, 1);
        $location.path('/').replace();
    });