'use strict';

import avatarTpl from './avatar.html';
import './avatar.scss';

const avatarModule = angular.module('avatar', []);

avatarModule
  .component('tuAvatar', {
		bindings: {
			src: '<',
			name: '<'
		},
		controller: AvatarController,
    templateUrl: avatarTpl
  });

  function AvatarController () {
		var vm = this;
		vm.getInitial = getInitial;
		vm.getRandomBgColor = getRandomBgColor;

		this.$onInit = function() {
			if(!vm.src) {
				vm.bgColor = getRandomBgColor();
				vm.initial = getInitial();
			}
		}

		function getInitial() {
			return vm.name.split('')[0];
		}

		function getRandomBgColor() {
			var colors = ['#96A637', '#699A33', '#943156', '#672770'];
			return colors[Math.floor(Math.random()*colors.length)];
		}
  }

export default avatarModule;
