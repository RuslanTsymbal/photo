'use strict';

import angular from 'angular';

const module = 'factoryListPhotos';

angular.module(module, [])
    .factory("factoryListPhotos", function () {
        let listPhotos = {};

        listPhotos.give = (data) => {
            let user = JSON.parse(localStorage.getItem("user"));
            let arrPhotos = [];

            data.photoset.photo.forEach((item, i) => {
                let obj = {
                    "farm": data.photoset.photo[i].farm,
                    "server": data.photoset.photo[i].server,
                    "photo_id": data.photoset.photo[i].id,
                    "secret": data.photoset.photo[i].secret,
                    "title": data.photoset.photo[i].title
                };
                arrPhotos.push(obj);
            });
            user.photos = arrPhotos;
            listPhotos.saveLS(user, "user");
        };

        listPhotos.saveLS = (data, key) => {
            localStorage[key] = angular.toJson(data);
            listPhotos.getPhotos();
        };

        listPhotos.getPhotos = () => {
            let user = JSON.parse(localStorage.getItem("user"));
            let result = user.photos;
            return result;
        };

        return listPhotos;
    });

export default module;
