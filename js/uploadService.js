angular
  .module("app")
  .factory('uploadService', function() {
      var uploadedImage = ''
      return {
        getURL: function() {
          return uploadedImage
        },
        setURL: function(URL) {
          uploadedImage = URL
        }
      }
    });
