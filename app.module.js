(function() {

  angular.module('app', ['ui.router'])
    .component('home', {
      templateUrl: '/templates/home.html',
      controller: "HomeController"
    }).component('upload', {
      templateUrl: '/templates/upload.html',
      controller: "UploadController"
    }).component('uploadProgress', {
      templateUrl: '/templates/progress.html',
      controller: "ProgressController"
    }).component('caption', {
      templateUrl: '/templates/caption.html',
      controller: "CaptionController"
    });
}())
