'use strict';

import angular from 'angular';
import factorySaveUser from './factorySaveUser.js';
import config from '../../js/cofig';

const module = 'authorizationCtrl';

angular.module(module, [])
    .controller('authorizationCtrl', function ($scope, $http, $state, factorySaveUser) {
        $scope.form = true;
        $scope.emailUser = "";

        let key = config.flickr_key;

        $scope.authorizationUser = (emailUser) => {
            let emailUrl = encodeURIComponent(emailUser);
            let readyUrl = "https://api.flickr.com/services/rest/?method=flickr.people.findByEmail&api_key=" + key + "&find_email=" + emailUrl + "&format=json&nojsoncallback=1";
            $http.get(readyUrl)
                .then((response)=> {
                    let data = response.data;
                    checkStatus(data, emailUser);
                });
        };

        let checkStatus = (data, emailUser) => {
            if (data.stat == "ok") {
                factorySaveUser.save(data);
                $state.go("albums");
            } else {
                alert("A user with an email: " + emailUser + " absent.");
            }
        };
    });


export default module;
