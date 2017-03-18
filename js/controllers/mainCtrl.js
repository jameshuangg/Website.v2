(function() {
	angular.module("myWebsite").controller("mainCtrl", [
		'$state',
		function($state) {
			
			/**
				Variable that stores the different page names
			**/
			this.pages = ['About', 'Work', 'Skills', 'Projects', 'Contact'];
			
			/**
				Function that redirects to the state depending on the button clicked
				
				Params:
					index - index of page clicked
			**/
			this.redirect = function(index) {
				$state.go(this.pages[index]);
			};
			
		}
		
	]);
})();