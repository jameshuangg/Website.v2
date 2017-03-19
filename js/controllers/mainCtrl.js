(function() {
	angular.module("myWebsite").controller("mainCtrl", [
		'$state',
		function($state) {
			
			/**
				Variable that stores the different page names
			**/
			this.pages = ['About', 'Employment', 'Skills', 'Projects', 'Contact'];
			
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
					description: "Developed modular automation scripts that met the testing needs for the business and made future implementation easy. Took initiative and became an impactful role in web development."
				}
			];
			
			this.skillLevels = ['God-like', 'Demi-God', 'Superhuman', 'Human', 'Baby'];
			
			this.skills = [
				{
					name: 'JavaScript',
					level: '70%'
				},
				{
					name: 'HTML & CSS',
					level: '80%'
				},
				{
					name: 'AngularJS',
					level: '70%'
				},
				{
					name: 'NodeJS/ Express',
					level: '50%'
				},
				{
					name: 'MongoDB',
					level: '45%'
				},
				{
					name: 'Calabash',
					level: '65%'
				},
				{
					name: 'C++',
					level: '60%'
				}
			]
		}
		
	]);
})();