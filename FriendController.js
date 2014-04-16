angular.module('apper').controller('FriendController', function($scope){
	//Everything happens here:
	$scope.test = "Hello World";
	$.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json', function(myJsonDataFromServer){
		$scope.friends = myJsonDataFromServer.results;
		$scope.$apply(function(){
			$scope.friends = my.results;
		});
	});
});



