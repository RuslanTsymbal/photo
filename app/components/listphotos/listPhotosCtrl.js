'use strict';

import angular from 'angular';
import factoryListPhotos from './factoryListPhotos.js';
import factoryUrlPhotos from './factoryUrlPhotos.js';
import factoryPhoto from './factoryPhoto.js';
import factoryDataAlbum from '../albums/factoryDataAlbum.js';

const module = 'listPhotosCtrl';

angular.module(module, [])
    .controller('listPhotosCtrl', ($scope, $http,  factoryDataAlbum, factoryListPhotos, factoryUrlPhotos, factoryPhoto) => {
        let album = factoryDataAlbum.getDataAlbum();
        let user_id = album.user_id;
        let photoset_id = album.photoset_id;

        $scope.showPhotos = false;
        $scope.showButton = true;

        $scope.urlPhotos = factoryUrlPhotos.getUrlPhotos();
        $scope.title = album.title;
        $scope.quantity = album.photos;

        let key = "f6902bbb3a8416f1fdd08b92fdceda7d";

        $scope.listPhotos = () => {
            let readyUrl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + key + "&photoset_id=" + photoset_id + "&user_id=" + user_id + "&format=json&nojsoncallback=1";

            $http.get(readyUrl)
                .then((response)=> {
                    let data = response.data;
                    factoryListPhotos.give(data);
                    $scope.photos = factoryListPhotos.getPhotos();
                    factoryUrlPhotos.give($scope.photos);
                    $scope.urlPhotos = factoryUrlPhotos.getUrlPhotos();
                    show();
                });
        };

        let show = () => {
            $scope.showPhotos = true;
            $scope.showButton = false;
        };

        $scope.take = (url , index) => {
            factoryPhoto.give(url, index);
        }
    });

export default module;
