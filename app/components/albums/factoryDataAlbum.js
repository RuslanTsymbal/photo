'use strict';

import angular from 'angular';

const module = 'factoryDataAlbum';

angular.module(module, [])
    .factory("factoryDataAlbum", () => {
        let album = {};

        album.give = (index) => {
            let user = JSON.parse(localStorage.getItem("user"));
            let data = user.albums[index];
            user.album = data;
            album.saveLS(user, "user")
        };

        album.saveLS = (data, key) => {
            localStorage[key] = angular.toJson(data);
        };

        album.getDataAlbum = () => {
            let user = JSON.parse(localStorage.getItem("user"));
            let result = user.album;
            return result;
        };

        return album;
    });

export default module;
