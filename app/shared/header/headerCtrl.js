'use strict';

import angular from 'angular';

const module = 'headerCtrl';
import factorySaveUser from '../../components/authorization/factorySaveUser.js';

angular.module(module, [])
    .controller('headerCtrl', function ($scope, $state, factorySaveUser) {
        $scope.showButtonExit = false;

        if (localStorage.getItem("user")) {
            let dataUser = factorySaveUser.getUser();
            $scope.name = dataUser.name;
            $scope.showButtonExit = true;
        }

        $scope.exit = () => {
            localStorage.clear();
            $state.go("index");
            $scope.showButtonExit = false;
        }
    });

export default module;
