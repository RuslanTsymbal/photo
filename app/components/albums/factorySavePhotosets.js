'use strict';

import angular from 'angular';

const module = 'factorySavePhotosets';

angular.module(module, [])
    .factory("factorySavePhotosets", function ($http) {

        let photosets = {};

        photosets.give = (key, user_id) => {
            let readyUrl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=" + key + "&user_id=" + user_id + "&format=json&nojsoncallback=1";

            return $http.get(readyUrl)
                .then((response)=> {
                    let data = response.data;
                    return data;
                });
        };

        photosets.save = (data) => {
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
