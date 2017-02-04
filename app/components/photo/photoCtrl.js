'use strict';

import angular from 'angular';

import factoryPhoto from '../listphotos/factoryPhoto.js';

const module = 'photoCtrl';

angular.module(module, [])
    .controller('photoCtrl', ($scope, $http, factoryPhoto) => {

        $scope.photo = factoryPhoto.getPhoto();

    });

export default module;
