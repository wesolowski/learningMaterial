angular.module('ContactsApp')
    .controller('ListController', function($scope, Contact, $location){
        $scope.contacts = Contact.query();
        $scope.fields = ['firstName', 'lastName'];

        $scope.sort = function (filed) {
            $scope.sort.field = filed;
            $scope.sort.order = !$scope.sort.order;
        }

        $scope.sort.field = 'firstName';
        $scope.sort.order = false;

        $scope.show = function(id) {
            $location.url('/contact/' + id);
        }
    })