'use strict';

const shared = angular.module('core.shared', []);

require('./services/users.adapter')(shared);
require('./services/users.model')(shared);
require('./services/users.service')(shared);

export default shared;
