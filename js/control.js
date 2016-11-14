function checkBoxControl( $scope ){

  $scope.counter=1;
  $scope.change = function(){
    $scope.counter++;
  };


  $scope.sizes = [
   {code: 1, name: 'n1',counter:1},
   {code: 2, name: 'n2',counter:2}
  ];
  $scope.update = function() {
   angular.forEach($scope.sizes, function (value, key) {
       value.counter=value.counter*3;
   });
 };

 $scope.item=$scope.sizes[0];

 $scope.forTEST=0;
 for(var i=0; i<10; i++){
   $scope.forTEST++;
 }

}

function Ctrl($scope) {
  $scope.templates =
    [ { name: 'template1.html', url: 'template1.html'}
    , { name: 'template2.html', url: 'template2.html'} ];
  $scope.template = $scope.templates[0];
}
