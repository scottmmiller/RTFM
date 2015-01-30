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

		}
	}).when('/threads/:threadId', {
		templateUrl: 'js/views/SingleThread/singleThread.html',
		controller:'SingleController',
		resolve: {

		}
	}).otherwise('/login');


});