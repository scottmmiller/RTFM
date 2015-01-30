var app = angular.module('rtfmApp');

app.controller('SingleController', function($scope, singleThreadRef) {

	$scope.test = "SingleController test!!";

	var singleThread = singleThreadRef.$asObject();

	singleThread.$bindTo($scope, 'singleThread');

	$scope.comments = commentsRef.$asArray();

	$scope.createComment = function(username, text) {
		$scope.comments.$add({
			username: username,
			text: text
		})
	}

});