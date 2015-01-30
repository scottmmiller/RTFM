var app = angular.module('rtfmApp');

app.controller('LoginController', function($scope, environmentService, $location) {

	// $scope.test = "LoginController test!!";

	// $scope.env = environmentService.getEnv();

	$scope.login = function(username) {
		alert(username);
		$scope.username = '';
		environmentService.saveUsername(username);
		console.log(environmentService.getUsername());
		$location.path('threads')
	}

	// $scope.$apply(function(){
	// $location.path('/dashboard/' + user.uid)
		// });

});