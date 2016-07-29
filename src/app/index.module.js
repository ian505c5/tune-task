'use strict';

import * as components from './index.components';
import config from './index.config';
import run from './index.run';


const App = angular.module(
  "tune", [
		'chart.js',
    // plugins
    require('angular-ui-router'),

		require('js-data-angular'),

    // core
    require("./core/core.module").name,

    // components
    require("./index.components").name,

    // routes
    require("./index.routes").name,

    // pages
		require("./pages/users/users.module").name

  ]
);

App
  .config(config)
  .run(run);



export default App;
