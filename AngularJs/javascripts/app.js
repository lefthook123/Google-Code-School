var app = angular.module('AccelApp',["ui.router",'ngAnimate']);
app.config(function($stateProvider, $urlRouterProvider,$locationProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'template/partial-home.html',
            controller:'mainController'
        })        
        .state('home.list', {
            url: '/list',
            templateUrl: 'template/partial-home-list.html'
        })
        .state('home.paragraph', {
        	url: '/paragraph',
        	template: 'I could sure use a drink right now.'
    	})
    	.state('team', {
            url: '/team',
            templateUrl: 'template/partial-team.html',
            controller:'teamController'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views:{

            	'': {templateUrl: 'template/partial-about.html',controller:'aboutController' },
            	'columnOne@about' :{template:'Look I am a column!'},
            	'columnTwo@about' :{
            		templateUrl:'template/table-data.html'
            		}      
            },                  
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'template/partial-contact.html',
            controller:'contactController'       
        });
        $locationProvider.html5Mode(true);
});


app.controller('mainController',function($scope){
	$scope.message = 'Everyone come and see how good I look!';
	$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
	$scope.pageClass = 'page-home';
});
app.controller('teamController',function($scope){
	$scope.pageClass = 'page-team';
});
app.controller('aboutController',function($scope){
	$scope.message = 'Look! I am an about page.';
	$scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    $scope.pageClass = 'page-about';
});

app.controller('contactController',function($scope){
	$scope.message = 'Contact us! JK. This is just a demo.';
	$scope.pageClass = 'page-contact';
});