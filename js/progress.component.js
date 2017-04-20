angular
  .module("app")
  .controller("ProgressController", ProgressController)

function ProgressController($interval) {
  const vm = this

  vm.$onInit = function() {
    vm.loading = [{
      text: "Examining burst",
      loading: true,
      done: false
    }, {
      text: "Calculating vapor spread pattern",
      loading: false,
      done: false
    }, {
      text: "Taming the dragon",
      loading: false,
      done: false
    }, {
      text: "Busting the ghost",
      loading: false,
      done: false
    }, {
      text: "Practicing French",
      loading: false,
      done: false
    }, {
      text: "We get it, you vape",
      loading: false,
      done: false
    }]

    var current = 0;
    $interval(function() {
      if(current < vm.loading.length) {
        vm.loading[current].loading = false;
        vm.loading[current].done = true;
        current++;
        if(current < vm.loading.length) {
          vm.loading[current].loading = true;
        } else {
          vm.done = true;
        }
      }
    }, 2000);
  }
}
