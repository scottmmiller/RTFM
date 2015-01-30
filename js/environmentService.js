var app = angular.module('rtfmApp');

app.service('environmentService', function($window) {
	this.getEnv = function() {
			return $window.env;
	}
});