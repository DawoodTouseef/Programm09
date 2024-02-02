var app=angular.module("employeeApp",[]);
app.controller("empcontoller",function($scope){
    $scope.employees=[
        {name:"Tony stark",salary:150000},
        {name:"Pepper",salary:2200001010020},
        {name:"John",salary:1500000}
    ];
    $scope.filtered=$scope.employees;
    $scope.Searchemploye=function(){
        $scope.filtered=$scope.employees.filter(function(employee){
            return(
                (employee.name.toLowerCase().includes($scope.searchName.toLowerCase()) || !$scope.searchName) &&
                (employee.salary==$scope.searchSalary || !$scope.searchSalary)
            );
        });

    };
});