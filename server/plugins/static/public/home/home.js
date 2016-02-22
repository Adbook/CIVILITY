

angular.module('brainConnectivity')
.controller('firstController', ['$scope','$http','probtrack','fileUpload', function($scope, $http, probtrack,fileUpload) {

  $scope.plotVisible = false ;
  $scope.ButtonClicked = false;
  $scope.plotData = undefined;
  $scope.plotParameters = {};

  $scope.submit = function(){

    probtrack.getFDTMatrix()
    .then(function(response){
      $scope.ButtonClicked = true;
      $scope.plotParameters.link1 = "";
      $scope.plotParameters.link2 = "";
      $scope.plotParameters.threshold = 0.1;
      $scope.plotParameters.method = [true,false,false];
      $scope.plotParameters.tension = 85;
      $scope.plotParameters.diameter = 960
      $scope.plotParameters.upperValue = 1;
      $scope.plotParameters.data = response.data;
      $scope.Plot;
    }).catch(console.error);

  };

  $scope.paramSubmitJob = function()
  {
    console.log("Submit");
    $scope.getSubjectID();
    $scope.getLabelsetName();
    $scope.addSurfaceColor();
    console.log("Overlapping " + $scope.overlapping);
    console.log("Loopcheck " + $scope.loopcheck);
    $scope.ignoreLabel();
    $scope.uploadFile();

  };


   $scope.ignoreLabel = function()
  {
    console.log("ignoreLabel : " + $scope.checkedIgnoreLabel);
    if($scope.checkedIgnoreLabel)
    {
      console.log($scope.labelNameIgnore.name)
    }
  };


  $scope.getSubjectID = function()
  {
    console.log("subject ID : " + $scope.subjectID.id);
  };

  $scope.getLabelsetName = function()
  {
    console.log("labelset name : "+ $scope.labelset.name);
  };

  $scope.addSurfaceColor = function()
  {
    console.log("two surfaces " + $scope.checkedSurfaceColored);
  }

   $scope.subjectID = {
        id: 'neonate',
      };

      $scope.labelNameIgnore = {
        name: '0-0-0',
      };

  $scope.labelset = {
        name: 'colour',
      };

  $scope.uploadFile = function(){
      
      var file = $scope.myFile1;
               
      console.log('file is ' );
      console.dir(file);
               
      var uploadUrl = "/fileUpload";
      fileUpload.uploadFileToUrl(file, uploadUrl);
   };



}]);


