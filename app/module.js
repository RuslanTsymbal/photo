'use strict';

import angular from 'angular';

//---modules---

import appRouter from "./routes.js";
import angularUiRouter from 'angular-ui-router';
import tooltips from 'angular-tooltips';
//Controllers
import headerCtrl from './shared/header/headerCtrl.js';
import authorizationCtrl from './components/authorization/authorizationCtrl.js';
import listPhotosCtrl from './components/listphotos/listPhotosCtrl.js';
import albumsCtrl from './components/albums/albumsCtrl.js';
import photoCtrl from './components/photo/photoCtrl.js';
//Factories
import factorySaveUser from './components/authorization/factorySaveUser.js';
import factorySavePhotosets from './components/albums/factorySavePhotosets.js';
import factoryDataAlbum from './components/albums/factoryDataAlbum.js';
import factoryListPhotos from './components/listphotos/factoryListPhotos.js';
import factoryUrlPhotos from './components/listphotos/factoryUrlPhotos.js';
import factoryPhoto from './components/listphotos/factoryPhoto.js';

const modulename = 'photoApp';

angular.module(modulename, [
        angularUiRouter,
        tooltips,
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
    .config(appRouter);

export default module;
