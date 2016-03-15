/*Custom Search Directive*/
app.directive('contactSearch', function () {
    return {
        restrict: 'E',
        scope: {
            'placeHolder': '@',
            'search': '=ngModel'
        },
        template: "<div class=\"form-group has-feedback\">" +
                        "<input type=\"text\" class=\"form-control\" placeholder=\"{{placeHolder}}\" ng-model=\"search\" />" +
                        "<i class=\"glyphicon glyphicon-search form-control-feedback\"></i>" +
                  "</div>"
    };
});