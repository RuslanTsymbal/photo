'use strict';

import angular from 'angular';

const module = 'factoryPhoto';

angular.module(module, [])
    .factory("factoryPhoto", function () {
        let photo = {};

        photo.give = (url, title, description) => {
            let user = JSON.parse(localStorage.getItem("user"));
            photo.save(user, url, title, description);
        };

        photo.save = (user, url, title, description)=> {
            user.photo = {
                "url": url,
                "album_tetle": title,
                "description": description
            };
            photo.saveLS(user, "user");
        };

        photo.saveLS = (data, key) => {
            localStorage[key] = angular.toJson(data);
        };

        photo.getPhoto = () => {
            let user = JSON.parse(localStorage.getItem("user"));
            let result = user.photo;
            return result;
        };

        return photo;
    });

export default module;
