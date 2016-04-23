/* eslint-disable no-console */
import angular from 'angular';
import bands from './bands';

angular.module('app', []);

bands('app');

console.log(angular.module('app'));
