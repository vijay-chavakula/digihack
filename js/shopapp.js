
var app = angular.module('VARK',['ngMaterial']);

app.config(['$mdIconProvider', function($mdIconProvider) {
  $mdIconProvider.icon('md-toggle-arrow', 'img/icons/toggle-arrow.svg', 48);
}]);


app.controller('AppCtrl', ['$scope','$http','$mdMedia',
	function($scope,$http,$mdMedia){
	  var thisCtrl = this;
	  $scope.items = [];
    $scope.tabVal = "home";
    $scope.isChatbotActive = false;
    //debugger;
    getNetworkData();
  $scope.printPage = function(){
    console.log("printPage..!");
    window.print();
  };
  $scope.showHome = function(){
    $scope.tabVal = "home";
  };
  $scope.isHomeActive = function(){
    return $scope.tabVal == "home";
  };
  $scope.setTabVal = function(val){
     $scope.tabVal = val;
  };
  $scope.setChatBot = function(){
    $scope.isChatbotActive = !$scope.isChatbotActive;
  };
	function remove(array, element) {
       return array.filter(e => e !== element);
  }
	function getNetworkData(){
		$http.get('https://a29f8r5cp1.execute-api.us-east-1.amazonaws.com/dev/cards')
		.then(function(response) {
			console.log(response);
			//console.log("data::" + response.data[0].name);
      const length = response.data.length;
      var i=0;
      for(i=0; i < length; i++){
        if(response.data[i].sMobile == '8106887717' || response.data[i].gMobile=='8106887717')
        $scope.items.push(response.data[i]);
      }
			//$scope.items = response.data;
		}).catch(function(response) {
			console.log("Error getting data ");
		});
  }
}]);
