'use strict';

import angular from 'angular';
import tooltips from 'angular-tooltips';
import factoryListPhotos from './factoryListPhotos.js';
import factoryUrlPhotos from './factoryUrlPhotos.js';
import factoryPhoto from './factoryPhoto.js';
import factoryDataAlbum from '../albums/factoryDataAlbum.js';
import config from '../../../assets/js/cofig';

const module = 'listPhotosCtrl';

angular.module(module, [tooltips])
    .controller('listPhotosCtrl', function ($scope, $http, factoryDataAlbum, factoryListPhotos, factoryUrlPhotos, factoryPhoto) {
        let album = factoryDataAlbum.getDataAlbum();
        let user_id = album.user_id;
        let photoset_id = album.photoset_id;
        let key = config.flickr_key;

        $scope.showPhotos = false;
        $scope.showButton = true;

        $scope.urlPhotos = factoryUrlPhotos.getUrlPhotos();
        $scope.title = album.title;
        $scope.quantity = album.photos;

        $scope.listPhotos = () => {
            factoryListPhotos.give(key, user_id, photoset_id)
                .then((response) => {
                    factoryListPhotos.save(response);
                    show();
                });
        };

        let show = () => {
            $scope.photos = factoryListPhotos.getPhotos();
            factoryUrlPhotos.give($scope.photos);
            $scope.urlPhotos = factoryUrlPhotos.getUrlPhotos();

            $scope.showPhotos = true;
            $scope.showButton = false;
        };

        $scope.choosePhoto = (url, index, description) => {
            factoryPhoto.give(url, index, description);
        };
    });

export default module;
