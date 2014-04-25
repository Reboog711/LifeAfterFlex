// this is the navigation; in essence a ViewStack in Flex
// you'd use this for loading different parts of the page based on the URL
lifeAfterFlex.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/login', {templateUrl: 'com/dotComIt/lifeAfterFlex/views/login/Login.html', controller: LoginCtrl}).
      when('/tasks', {templateUrl: 'com/dotComIt/lifeAfterFlex/views/tasks/MainScreen.html', controller: MainScreenCtrl}).
      otherwise({redirectTo: '/login'});
}]);