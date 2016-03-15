app.controller('contactsController', ['$scope', 'contactsService', function ($scope, contactsService) {
    $scope.title = 'List of Contacts';

    contactsService.getAllContacts().then(function (response) {
        $scope.contacts = response;
    }, function (response) {

        /*TODO: In a real application we would threat Exception properly informing the problem to the user using a user-friendly information message*/

        alert('An Error has ocurred');
    });
}])
.controller('aboutController', ['$scope', function ($scope) {
    $scope.title = 'About Information';
}]);