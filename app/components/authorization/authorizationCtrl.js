'use strict';

import angular from 'angular';
import factorySaveUser from './factorySaveUser.js';

const module = 'authorizationCtrl';

angular.module(module, [])
    .controller('authorizationCtrl', ($scope, $http, $state, factorySaveUser) => {
        $scope.form = true;
        $scope.emailUser = "rtrtrt";

        let key = "f6902bbb3a8416f1fdd08b92fdceda7d";

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
