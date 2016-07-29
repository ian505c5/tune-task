'use strict';

// index.html page to dist folder
import '!!file-loader?name=[name].[ext]!../favicon.ico';

// main App module
import "./index.module";

import "../assets/styles/sass/application.scss";

angular.element(document).ready(function () {
  angular.bootstrap(document, ['tune'], {
    strictDi: true
  });
});
