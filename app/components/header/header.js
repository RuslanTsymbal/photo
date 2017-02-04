'use strict';

import angular from 'angular';

const module = 'headerCtrl';
import factorySaveUser from '../authorization/factorySaveUser.js';

angular.module(module, [])
    .controller('headerCtrl',($scope, $state, factorySaveUser) => {
        $scope.showButtonExit = false;
        if(localStorage.getItem("user")){
            let dataUser = factorySaveUser.getUser();
            $scope.name = dataUser.name;
            $scope.showButtonExit = true;
        }

        $scope.exit = () => {
            localStorage.clear();
            $state.go("index");
        }
    });

export default module;
