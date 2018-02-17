
var app = angular.module('VARK',['ngMaterial']);

app.config(['$mdIconProvider', function($mdIconProvider) {
  $mdIconProvider.icon('md-toggle-arrow', 'img/icons/toggle-arrow.svg', 48);
}]);


app.controller('AppCtrl', ['$scope','$http','$mdMedia',
	function($scope,$http,$mdMedia){
	  var thisCtrl = this;
	  $scope.items = [];

  $scope.printPage = function(){
    console.log("printPage..!");
    window.print();
  }

}]);
