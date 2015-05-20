/**
 * Created by brianaamodt on 5/18/15.
 */
console.log("Script Loaded");

var App = angular.module('App', []);

App.controller('tokenStats', ["$scope", "$http", function($scope, $http){
    $scope.token = {};
    $scope.stats = [];

    var getStats = function() {
        return $http.get('/users/stats').then(function(response){
            $scope.token = {};
            $scope.stats = response.data;
            console.log($scope.stats);
            return $scope.stats.data;
        });
    };

    $scope.create = function(token) {
        console.log("click");
        return $http.post('/users/add', token).then(getStats());
    };

    $scope.count = function(unit, token) {
        $scope.unit= unit;
            console.log("DELETE: ", unit, token);
        if ($scope.unit == 0) {
            return $http.delete('/users/' + token._id, token).then(getStats());
        }
    };
    //$scope.count = function(token) {
    //    console.log("DELETE: ", token);
    //        return $http.delete('/users/' + token._id, token).then(getStats());
    //    }
    //};
    getStats();
}]);
//
//$scope.grabinfo = function(){
//    return $http.get("/info").then(function(response){
//        if(response.status !=200){
//            throw new err (" yo, no info");
//        }
//        $scope.persons.push(response.data);
//        console.log($scope.persons);
//        return response.data;
//
//    });
//};