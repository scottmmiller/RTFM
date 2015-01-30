var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'js/templates/login/login.html',
		controller: 'LoginController',
		resolve: {

		}
	}).when('/threads', {
		templateUrl: 'js/templates/threads/threads.html',
		controller: 'ThreadsController',
		resolve: {

		}
	}).when('/threads/:threadId', {
		templateUrl: 'js/templates/SingleThread/SingleThread.html',
		controller:'SingleController',
		resolve: {

		}
	}).otherwise('/login');


});