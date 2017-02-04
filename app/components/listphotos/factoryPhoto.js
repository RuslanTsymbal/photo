'use strict';

import angular from 'angular';

const module = 'factoryPhoto';

angular.module(module, [])
    .factory("factoryPhoto", () => {
        let photo = {};

        photo.give = (url, index) => {
            debugger;
            let user = JSON.parse(localStorage.getItem("user"));
            user.photo = {
                "url": url,
                "album": user.album.title,
                "title": user.photos[index].title
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
