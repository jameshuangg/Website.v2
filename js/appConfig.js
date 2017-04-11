(function() {
	angular.module("myWebsite").config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
			.state('Home', {
				url: '/',
				templateUrl: '../pages/home.html',
				controller: 'mainCtrl',
				controllerAs: 'main'
			})
			.state('About', {
				url: '/about',
				templateUrl: '../pages/about.html',
				controller: 'mainCtrl',
				controllerAs: 'main'
			})
			.state('Employment', {
				url: '/employment',
				templateUrl: '../pages/work.html',
				controller: 'mainCtrl',
				controllerAs: 'main'
			})
			.state('Projects', {
				url: '/projects',
				templateUrl: '../pages/projects.html',
				controller: 'mainCtrl',
				controllerAs: 'main'
			})
			.state('Contact', {
				url: '/contact',
				templateUrl: '../pages/contact.html',
				controller: 'mainCtrl',
				controllerAs: 'main'
			});

			$urlRouterProvider.otherwise('/');
		}
	]);
})();