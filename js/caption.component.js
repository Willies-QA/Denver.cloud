angular
  .module("app")
  .controller("CaptionController", CaptionController)

function CaptionController() {
  const vm = this

  vm.$onInit = function() {
    vm.image = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRAJj7pECgmRZdyt_zomQIVboP_q0prP2s28OyVwSi4iyft7haFEyVrU8E"
  }
}
