(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];

function ToBuyController($scope, ShoppingListCheckOffService) {
  

  this.itemsToBuy =  ShoppingListCheckOffService.getItemsToBuy();

  this.checkOff = function (index){
    try{
      ShoppingListCheckOffService.checkOffItem(index);
    } catch(error){
      this.errorMessage = error.message;
    }
  }

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {

  this.itemsBought = ShoppingListCheckOffService.getItemsBought();

}


function ShoppingListCheckOffService() {


  var itemsToBuy =   [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];

  var itemsBought = [];

  this.checkOffItem = function (itemIndex) {
    var removedItem = itemsToBuy.splice(itemIndex,1);
    itemsBought.push(removedItem[0]);

    if(itemsToBuy.length == 0){
      throw new Error("Everything is bought!");
    }
  };

  this.getItemsToBuy = function () {
    return itemsToBuy;
  };

  this.getItemsBought = function () {
    return itemsBought;
  };

  
}

})();
