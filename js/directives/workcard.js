(function() {
	angular.module("myWebsite").directive('workcard', function() {
		return {
			restrict: 'E',
			templateUrl: '/pages/workcard.html'
		};
	});
})();