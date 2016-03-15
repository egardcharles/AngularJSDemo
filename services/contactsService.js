app.factory('contactsService', ['$q', '$http', function ($q, $http) {
    return {
        getAllContacts: function () {
            var deferred = $q.defer();

            /*At this point we would request the data from the webservice/WebAPI service instead of from the JSON static file('contacts.json')*/
            $http.get('contacts.json').then(function (response) {
                deferred.resolve(response.data);
            }), function (error) {
                deferred.reject(error);
            };

            return deferred.promise;
        }
    }
}]);