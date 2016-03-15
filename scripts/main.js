var app = angular.module('mainModule', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {

        /*Configuring application routing system*/
        $routeProvider
            .when('/contacts', {
                templateUrl: 'Templates/Contacts.html',
                controller: 'contactsController'
            })
            .when('/about', {
                templateUrl: 'Templates/About.html',
                controller: 'aboutController'
            })
            .otherwise({
                redirectTo: '/contacts'
            });

        /*Applies regular URL path instead of hashbang ("#") in the url for new browsers
        (old browsers fallback to #)*/
        $locationProvider.html5Mode(true);
    });
