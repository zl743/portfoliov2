var app = angular.module('portfolioApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/about.html', {
				templateUrl: '/about.html'
			})
			.when('/work.html', {
				templateUrl: '/work.html'
			})
			.when('/contact.html', {
				templateUrl: '/contact.html'
			})
			.otherwise({
				redirectTo: '/index.html'
			});

}]);
