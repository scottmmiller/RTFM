var app = angular.module('rtfmApp');

app.controller('LoginController', function($scope, environmentService) {

	// $scope.test = "LoginController test!!";

	$scope.env = environmentService.getEnv();

});