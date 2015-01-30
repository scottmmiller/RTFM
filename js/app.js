var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'js/views/login/loginView.html',
		controller: 'LoginController',
		resolve: {

		}
	}).when('/threads', {
		templateUrl: 'js/views/threads/threadsView.html',
		controller: 'ThreadsController',
		resolve: {
			threadsRef: function(threadsService) {
				return threadsService.getThreads();
			}
		}
	}).when('/threads/:threadId', {
		templateUrl: 'js/views/SingleThread/singleThread.html',
		controller:'SingleController',
		resolve: {
			singleThreadRef: function(threadsService, $route) {
				return threadsService.getSingleThread($route.current.params.threadId);
			},
			commentsRef: function(threadsService, $route) {
				return threadsService.getComments($route.current.params.threadId);
			}
		}
	}).otherwise('/login');

});

app.run(function($rootScope, $location, environmentService) {
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if(environmentService.getUsername()) {
			$rootScope.user = environmentService.getUsername();
		} else {
			$location.path('/login');
		}
	})


});