'use strict'

var app = angular.module('rtfmApp');

app.controller('ThreadsController', function($scope, environmentService, threadsService, threadsRef) {

	$scope.username = environmentService.getUsername();

	$scope.threads = threadsRef.$asArray();

	// $scope.threads.$loaded().then(function(threads) {
	// })
	
	$scope.createThread = function(username, title) {
		$scope.threads.$add({
			username: username,
			title: title
		});
		$scope.newThreadTitle = '';
	};
});