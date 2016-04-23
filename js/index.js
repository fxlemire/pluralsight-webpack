/* eslint-disable no-console */
import angular from 'angular';
import bandInfo from './bands/band-info';
import bandList from './bands/bandList';

angular.module('app', []);

bandInfo('app');
bandList('app');

console.log(angular.module('app'));
