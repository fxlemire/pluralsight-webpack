/* eslint-disable no-console */
require('../css/app.scss');
require('../css/bootstrap.css');

const webpackLogo = require('../images/webpack_logo.png');
const img = document.createElement('img');

img.style.height = '25%';
img.style.width = '25%';
img.src = webpackLogo;

document.getElementById('img_container').appendChild(img);

console.log('App loaded');
