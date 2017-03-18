(function() {
	angular.module("myWebsite").config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
			.state('About', {
				url: '/about',
				templateUrl: '../pages/about.html',
				controller: 'mainCtrl',
				controllerAs: 'main'
			})
			.state('Work', {
				url: '/work',
				templateUrl: '../pages/work.html',
				controller: 'mainCtrl',
				controllerAs: 'main'
			})
			.state('Skills', {
				url: '/skills',
				templateUrl: '../pages/skills.html',
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

			$urlRouterProvider.otherwise('about');
		}
	]);
})();