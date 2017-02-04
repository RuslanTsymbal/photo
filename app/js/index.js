'use strict';

import angular from 'angular';

//modules
import headerCtrl from '../components/header/headerCtrl.js';
import authorizationCtrl from '../components/authorization/authorizationCtrl.js';
import listPhotosCtrl from '../components/listphotos/listPhotosCtrl.js';
import albumsCtrl from '../components/albums/albumsCtrl.js';
import photoCtrl from '../components/photo/photoCtrl.js';

import factorySaveUser from '../components/authorization/factorySaveUser.js';
import factorySavePhotosets from '../components/albums/factorySavePhotosets.js';
import factoryDataAlbum from '../components/albums/factoryDataAlbum.js';
import factoryListPhotos from '../components/listphotos/factoryListPhotos.js';
import factoryUrlPhotos from '../components/listphotos/factoryUrlPhotos.js';
import factoryPhoto from '../components/listphotos/factoryPhoto.js';


import angularUiRouter from 'angular-ui-router';

const modulename = 'photoApp';

angular.module(modulename, [
        angularUiRouter,
        headerCtrl,
        authorizationCtrl,
        factorySaveUser,
        albumsCtrl,
        factorySavePhotosets,
        factoryDataAlbum,
        listPhotosCtrl,
        factoryListPhotos,
        factoryUrlPhotos,
        photoCtrl,
        factoryPhoto
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('index', {
                url: "/",
                views: {
                    'header': {
                        templateUrl: '../components/header/header.html',
                        controller: headerCtrl
                    },
                    'body': {
                        templateUrl: '../components/authorization/authorization.html',
                        controller: authorizationCtrl
                    }
                },
                cache: false
            })

            .state('albums', {
                url: "/albums",
                views: {
                    'header': {
                        templateUrl: '../components/header/header.html',
                        controller: headerCtrl
                    },
                    'body': {
                        templateUrl: '../components/albums/albums.html',
                        controller: albumsCtrl
                    }
                }
            })


            .state('list-photos', {
                url: "/list-photos",
                views: {
                    'header': {
                        templateUrl: '../components/header/header.html',
                        controller: headerCtrl
                    },
                    'body': {
                        templateUrl: '../components/listphotos/listPhotos.html',
                        controller: listPhotosCtrl
                    }
                }
            })

            .state('photo', {
                url: "/photo",
                views: {
                    'header': {
                        templateUrl: '../components/header/header.html',
                        controller: headerCtrl
                    },
                    'body': {
                        templateUrl: '../components/photo/photo.html',
                        controller: photoCtrl
                    }
                }
            });
    });

export default module;