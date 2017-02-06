'use strict';

import angular from 'angular';

const module = 'factoryDataAlbum';

angular.module(module, [])
    .factory("factoryDataAlbum", function () {
        let album = {};

        album.give = (index) => {
            let user = JSON.parse(localStorage.getItem("user"));
            album.save(user, index)
        };

        album.save = (user, index) => {
            let albumUser = user.albums[index];
            user.album = albumUser;
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
