angular.module('userProfiles').controller('mainController', function($scope, mainService) {

  $scope.currentPage = 1;

  $scope.prev = function(){
    if($scope.currentPage > 1){//maxPages
    currentPage--;
    $scope.getUsers();
  }
  };

  $scope.next = function(){
    if($scope.currentPage < 4){//maxPages
    currentPage++;
    $scope.getUsers();
  }
  };

  $scope.getUsers = function() {
  	var promise = mainService.getUsers($scope.currentPage);
    promise.then(function(response){
      $scope.users = response.data.data;
      //$scope.maxPages =
    });
  }


  $scope.getUsers();

});
