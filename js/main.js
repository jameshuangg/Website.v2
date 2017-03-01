(function() {
		angular.module("myWebsite", []);
	
		angular.module("myWebsite", [])
		.controller("mainController", function() {
			this.employment = [
				{
					employer: "nanoPay",
					title: "Quality Assurance Engineer / Web Developer",
					duration: "January 2017 - April 2017",
					description: "Utilized Selenium and Calabash to integrate clean and efficient automation testing for mobile and web applications. Utilized various technologies and frameworks to develop web based applicaions.",
					skills: [
						{
							name: "calabash",
							level: "70%"
						},
						{
							name: "selenium",
							level: "50%"
						},
						{
							name: "javascript",
							level: "70%"
						},
						{
							name: "angularJS",
							level: "70%"
						}
					],
					
				}
			];
		});
})();