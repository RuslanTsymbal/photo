'use strict';

//Controllers
import headerCtrl from './shared/header/headerCtrl.js';
import authorizationCtrl from './components/authorization/authorizationCtrl.js';
import listPhotosCtrl from './components/listphotos/listPhotosCtrl.js';
import albumsCtrl from './components/albums/albumsCtrl.js';
import photoCtrl from './components/photo/photoCtrl.js';

import angular from 'angular';

function appRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index', {
            url: "/",
            views: {
                'header': {
                    templateUrl: './dist/shared/header/header.html',
                    controller: headerCtrl
                },
                'body': {
                    templateUrl: './dist//components/authorization/authorization.html',
                    controller: authorizationCtrl
                }
            },
            cache: false
        })

        .state('albums', {
            url: "/albums",
            views: {
                'header': {
                    templateUrl: 'dist/shared/header/header.html',
                    controller: headerCtrl
                },
                'body': {
                    templateUrl: 'dist/components/albums/albums.html',
                    controller: albumsCtrl
                }
            }
        })

        .state('list-photos', {
            url: "/list-photos",
            views: {
                'header': {
                    templateUrl: 'dist/shared/header/header.html',
                    controller: headerCtrl
                },
                'body': {
                    templateUrl: 'dist/components/listphotos/listPhotos.html',
                    controller: listPhotosCtrl
                }
            }
        })

        .state('photo', {
            url: "/photo",
            views: {
                'header': {
                    templateUrl: 'dist/shared/header/header.html',
                    controller: headerCtrl
                },
                'body': {
                    templateUrl: 'dist/components/photo/photo.html',
                    controller: photoCtrl
                }
            }
        })
}

export default appRouter;
