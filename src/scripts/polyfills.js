import 'core-js';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import objectFitImages from 'object-fit-images';

document.addEventListener("DOMContentLoaded", function(event) { 
  objectFitImages();
});
