(function () {
'use strict';

angular.module("MsgApp", [])
  .controller("MsgController", MsgController);

  MsgController.$inject = ["$scope"];
  function MsgController($scope) {
    $scope.name = "Matthew";
    $scope.stateOfBeing = "one";

    $scope.sayMessage = function () {
      return "Matthew likes to look after rabbits!";
    };

    $scope.changeRabbit = function () {
      $scope.stateOfBeing = "two";
    };

  }

/*
angular.module("DIApp", [])
  .controller("DIController", DIController);

DIController.$inject = ['$scope', '$filter']; // minify proof but messes up console log
function DIController ($scope, $filter, $injector) {
  $scope.name="Matthew";

  $scope.upper = function () {
    var upCase = $filter("uppercase");
    $scope.name = upCase($scope.name);
  };

// console.log($injector.annotate(DIController));

}
*/


/*
angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    var totalNameValue =
    calculateNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };

  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;

  }

});
*/

/*
// define our main app responsible for some chunk of html
// along with a module, which takes the name of the app.


angular.module('myFirstApp', [])


// myFirstController is a view model bound to the controller

// $scope is a special object that AngularJS provides for us in order to share
// data between our view model and our view


.controller('myFirstController', function ($scope) {
  $scope.name = "Matthew";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});
*/

})();
