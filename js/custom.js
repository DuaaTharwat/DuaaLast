var app = angular.module('sessions', []);
app.controller('SessionsCtrl', [
  '$scope',
  function($scope){  
  
$scope.previousData = [
  {
    "title": "Introduction to jquery",
    "author": "hussien salah",
    "category": "web design & development",
    "date": "Tuseday , 12th of septmber 2016",
	"image":"img/img1.png",
    "description": " Web design and development Web design and development Web design and development Web design and development Web design and development"
  },
  {
    "title": "Learning English",
    "author": "Duaa Tharwat",
    "category": "Language",
    "date": "sunday , 20th of septmber 2016",
	"image":"img/img2.png",
    "description": " Language LanguageLanguage Language  Language LanguageLanguage Language  Language LanguageLanguage Language  Language LanguageLanguage Language  Language LanguageLanguage Language  Language LanguageLanguage Language "
  },
  {
    "title": "Learning Ielts",
    "author": "Eman",
    "category": "English",
    "date": "sunday , 20th of septmber 2016",
	"image":"img/img3.png",
    "description": " Language LanguageLanguage Language  Language LanguageLanguage Language  Language LanguageLanguage Language  Language LanguageLanguage Language  Language LanguageLanguage Language  Language LanguageLanguage Language "
  }
]



$scope.upComingData = [
  {
    "title": "Introduction to jquery",
    "author": "hussien salah",
    "category": "web design & development",
	"day": "Mounday",
	"time":"7:00 PM",
	"image":"img/img1.png",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining  "
  },
  {
    "title": "Learning English",
    "author": "Duaa Tharwat",
    "category": "Language",
	"day": "sunday",
	"time":"11:00 PM",
	"image":"img/img2.png",
    "description": "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and "
  },

]



  }
]);

