(function(){
    'use strict';
  
    angular.module('LunchCheck',[])
    
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope){
        
        //$scope.errorStyle={};
      
       $scope.checkLunch = function (){
           if(!$scope.lunch || $scope.lunch == " "){
               $scope.message = "Please enter data first";
               $scope.errorStyle={"color":"red"};
           } 
           
           else{
               var numItems = countAmountEaten($scope.lunch);
               $scope.errorStyle={"color":"green"};
               if(numItems<=3){
                   $scope.message = "Enjoy!";
               }
               else if(numItems>3){
                   $scope.message = "Too Much!";
               }
           }
       }; 
       
       function countAmountEaten(string){
           var items = string.split(',');
           return items.length;
       }
       
    }
})();
