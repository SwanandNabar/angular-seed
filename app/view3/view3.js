(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('mainCtrl',mainCtrl);

    function mainCtrl() {
        var mainCtrlVm = this;

        mainCtrlVm.users = {
            name : 'Swanand',
            id : 24
        };
    }
})();