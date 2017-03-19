(function() {
	angular.module("myWebsite").directive('graphelement', function() {
		return {
			restrict: 'E',
			templateUrl: '/pages/graphelement.html'
		};
	});
})();