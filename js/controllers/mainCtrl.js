(function() {
	angular.module("myWebsite").controller("mainCtrl", [
		'$state',
		function($state) {
			
			/**
				Variable that stores the different page names
			**/
			this.pages = ['Home', 'About', 'Employment', 'Projects', 'Contact'];
			
			/**
				Function that redirects to the state depending on the button clicked
				
				Params:
					index - index of page clicked
			**/
			this.redirect = function(index) {
				$state.go(this.pages[index]);
			};
			
			this.workcard = [
				{
					title: "nanoPay",
					position: "QA Engineer",
					duration: "Jan 2017 - Apr 2017",
					description: "Developed modular automation scripts that met the testing needs for the business and made future implementation easy. Took initiative and joined the web development team to develop many web application products."
				}
			];
			
			// Used to detect which page you are currently on.
			this.checkState = function(page) {
				return page == $state.current.name;
			};
		}
	]);
})();