var app = angular.module('portfolioApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/about.html', {
				templateUrl: '/about.html'
			})
			.when('/projects.html', {
				templateUrl: '/projects.html'
			})
			.when('/contact.html', {
				templateUrl: '/contact.html'
			})
			.when('/resume.html', {
				templateUrl: '/resume.html'
			})
			.otherwise({
				redirectTo: '/index.html'
			});

}]);
