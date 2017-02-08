'use strict';

import angular from 'angular';

const module = 'factorySaveUser';

angular.module(module, [])
    .factory("factorySaveUser", function ($http) {

        let user = {};

        user.give = (key, emailUrl) => {
            let readyUrl = "https://api.flickr.com/services/rest/?method=flickr.people.findByEmail&api_key=" + key + "&find_email=" + emailUrl + "&format=json&nojsoncallback=1";
            return $http.get(readyUrl)
                .then((response)=> {
                    let data = response.data;
                    return data;
                });
        };

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
