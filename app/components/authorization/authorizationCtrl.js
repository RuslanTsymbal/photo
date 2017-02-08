'use strict';

import angular from 'angular';
import factorySaveUser from './factorySaveUser.js';
import config from '../../../assets/js/cofig';

const module = 'authorizationCtrl';

angular.module(module, [])
    .controller('authorizationCtrl', function ($scope, $state, factorySaveUser) {
        $scope.emailUser = "";

        let key = config.flickr_key;

        $scope.authorizationUser = (emailUser) => {
            let emailUrl = encodeURIComponent(emailUser);

            factorySaveUser.give(key, emailUrl)
                .then((response) => {
                    if (response.stat == "ok") {
                        factorySaveUser.save(response);
                    }
                    let dataUser = factorySaveUser.getUser();
                    show(dataUser);
                });
        };

        let show = (dataUser) => {
            if (dataUser) {
                $state.go("albums");
            } else if (dataUser == null) {
                alert("A user with this email is not available.");
            }
        };
    });


export default module;
