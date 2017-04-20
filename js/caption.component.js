angular
  .module("app")
  .controller("CaptionController", CaptionController)

function CaptionController(nounService) {
  const vm = this

  console.log(nounService.getRandomNoun())

  vm.$onInit = function() {}
}
