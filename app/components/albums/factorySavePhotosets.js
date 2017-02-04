'use strict';

import angular from 'angular';

const module = 'factorySavePhotosets';

angular.module(module, [])
    .factory("factorySavePhotosets", function () {
        let photosets = {};

        photosets.give = data => {
            let listAlbums = [];
            let user = JSON.parse(localStorage.getItem("user"));
            data.photosets.photoset.forEach((item, i) => {

                let obj = {
                    "user_id": user.id,
                    "title": data.photosets.photoset[i].title._content,
                    "photoset_id": data.photosets.photoset[i].id,
                    "photos": data.photosets.photoset[i].photos
                };

                listAlbums.push(obj);
            });

            user.albums = listAlbums;
            photosets.saveLS(user, "user");
        };

        photosets.saveLS = (data, key) => {
            localStorage[key] = angular.toJson(data);
        };

        photosets.getAlbums = () => {
            let user = JSON.parse(localStorage.getItem("user"));
            let result = user.albums;
            return result;
        };

        return photosets;
    });

export default module;
