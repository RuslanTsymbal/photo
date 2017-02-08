'use strict';

import angular from 'angular';
import factorySaveUser from '../authorization/factorySaveUser.js';
import factorySavePhotosets from './factorySavePhotosets.js';
import factoryDataAlbum from './factoryDataAlbum.js';
import config from '../../../assets/js/cofig';

const module = 'albumsCtrl';

angular.module(module, [])
    .controller('albumsCtrl', function ($scope, factorySaveUser, factorySavePhotosets, factoryDataAlbum) {
        $scope.showAlbums = false;
        $scope.showRequest = true;
        $scope.showResult = false;
        $scope.albumsUser = [];
        $scope.albumsUser = factorySavePhotosets.getAlbums();

        let key = config.flickr_key;
        let user = factorySaveUser.getUser();
        let user_id = user.id;

        if ($scope.albumsUser) {
            $scope.showAlbums = true;
            $scope.showRequest = false;
        }

        $scope.requestListAlbums = () => {
            factorySavePhotosets.give(key, user_id)
            .then((response) => {
                factorySavePhotosets.save(response);
                show();
            });
        };

        let show = () => {
            $scope.albumsUser = factorySavePhotosets.getAlbums();
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
