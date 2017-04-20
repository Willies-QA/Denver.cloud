angular
  .module("app")
  .controller("CaptionController", CaptionController)

function CaptionController(nounService, uploadService) {
  const vm = this

  console.log(nounService.getRandomNoun())

  vm.$onInit = function() {
    vm.noun = nounService.getRandomNoun();
    vm.image = uploadService.getURL();
  }
}
