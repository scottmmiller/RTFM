var app = angular.module('rtfmApp');

app.service('threadsService', function($http, $q, environmentService, $firebase) {
	var firebaseUrl = environmentService.getEnv().firebase;

	this.getThreads = function() {
		return $firebase(new Firebase(firebaseUrl + '/threads'));
	};

	this.getSingleThread = function(threadId) {
		return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId));
	};

});