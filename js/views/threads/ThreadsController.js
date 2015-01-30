'use strict'

var app = angular.module('rtfmApp');

app.controller('ThreadsController', function($scope, environmentService, threadsService) {

	$scope.username = environmentService.getUsername();

	$scope.threads = threadsService.getThreads().$asArray;
	

});