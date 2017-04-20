angular
  .module("app")
  .controller("UploadController", UploadController)

function UploadController(uploadService, $state) {
  const vm = this

  vm.$onInit = function() {}

  vm.doImage = function() {
    uploadService.setURL(vm.uploadedImage);
    console.log(uploadService.getURL());
    $state.go('progress');
  }


}
