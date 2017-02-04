'use strict';

import angular from 'angular';

const module = 'factoryUrlPhotos';

angular.module(module, [])
    .factory("factoryUrlPhotos", () => {
        let urlPhotos = {};

        urlPhotos.give = (data) => {
            let user = JSON.parse(localStorage.getItem("user"));
            let arrUrl = [];

            data.forEach((item, i) => {
                let url = "https://farm" + data[i].farm + ".staticflickr.com/" + data[i].server + "/" + data[i].photo_id + "_" + data[i].secret + "_m.jpg";
                arrUrl.push(url);
            });
            user.urlPhotos = arrUrl;
            urlPhotos.saveLS(user, "user");
        };

        urlPhotos.saveLS = (data, key) => {
            localStorage[key] = angular.toJson(data);
        };

        urlPhotos.getUrlPhotos = () => {
            let user = JSON.parse(localStorage.getItem("user"));
            let result = user.urlPhotos;
            return result;
        };

        return urlPhotos;
    });

export default module;
