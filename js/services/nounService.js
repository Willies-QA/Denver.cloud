(function () {

  angular
    .module('app')
    .factory('nounService', nounService)

    function nounService() {
      const vm = this
      vm.service = {}

      vm.service.getRandomNoun = getRandomNoun

//===============================
//
//===============================

      function getRandomNoun() {
        return vm.nounsArray[Math.floor(Math.random() * vm.nounsArray.length)]
      }

      vm.nounsArray = ["test", "hi", "you", "ttt", "kdkdj", "kdkdk"]

      return vm.service
      }
})()
