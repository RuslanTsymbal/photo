'use strict';

import angular from 'angular';
import factorySaveUser from '../authorization/factorySaveUser.js';
import factorySavePhotosets from './factorySavePhotosets.js';
import factoryDataAlbum from './factoryDataAlbum.js';
import config from '../../js/cofig';

const module = 'albumsCtrl';

angular.module(module, [])
    .controller('albumsCtrl', ($scope, $rootScope, $http, factorySaveUser, factorySavePhotosets, factoryDataAlbum) => {
        $scope.showAlbums = false;
        $scope.showRequest = true;
        $scope.showResult = false;
        $scope.albumsUser = factorySavePhotosets.getAlbums();

        let key = config.flickr_key;
        let user = factorySaveUser.getUser();
        let user_id = user.id;

        if ($scope.albumsUser) {
            $scope.showAlbums = true;
            $scope.showRequest = false;
        }

        $scope.requestListAlbums = () => {
            let readyUrl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=" + key + "&user_id=" + user_id + "&format=json&nojsoncallback=1";
            $http.get(readyUrl)
                .then((response)=> {
                    let data = response.data;
                    factorySavePhotosets.give(data);
                    $scope.albumsUser = factorySavePhotosets.getAlbums();
                    show();
                });
        };

       let show = () => {
            if ($scope.albumsUser.length == 0) {
                $scope.showAlbums = true;
                $scope.showRequest = false;
                $scope.showResult = true;
            } else {
                $scope.showRequest = false;
                $scope.showAlbums = true;
                $scope.showResult = false;
            }
        };

        $scope.getIndexAlbum = (index) => {
            factoryDataAlbum.give(index);
        };
    });

export default module;
