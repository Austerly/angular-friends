angular.module('apper').controller('FriendController', function($scope, $http){
	//Everything happens here:
	$scope.test = "Hello World";
	$scope.scender = false;
	$scope.sorter = 'name';
	// $.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json', function(myJsonDataFromServer){
	// 	$scope.friends = myJsonDataFromServer.results;
	// 	$scope.$apply(function(){
	// 		$scope.friends = my.results;
	// 	});
	// });
	$http({method: 'GET', 
		url: 'https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json'}).
		success(function(data){
			$scope.friends = data.results;
			$scope.friendName = friends.name;
		});

});
