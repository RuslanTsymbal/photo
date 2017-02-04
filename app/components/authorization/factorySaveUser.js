'use strict';

import angular from 'angular';

const module = 'factorySaveUser';

angular.module(module, [])
    .factory("factorySaveUser", function () {
        let user = {};

        user.save = data => {
            let dataUser = {
                "name": data.user.username._content,
                "id": data.user.id
            };
            user.saveLS(dataUser, "user");
        };

        user.saveLS = (data, key) => {
            localStorage[key] = angular.toJson(data);
        };

        user.getUser = () => {
            let result = JSON.parse(localStorage.getItem("user"));
            return result;
        };

        return user;
    });

export default module;
