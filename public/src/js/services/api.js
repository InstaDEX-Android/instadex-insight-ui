'use strict';

angular.module('insight.api')
  .factory('Api',
    function() {
      return {
        apiPrefix: '/instadex-insight-api'
      }
    });
