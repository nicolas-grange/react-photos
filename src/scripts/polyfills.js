
// resizing vh for mobile topbar
function updateVhUnit() {
	let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
function initSize() {
	window.addEventListener('resize', updateVhUnit);
	window.addEventListener('orientationchange', updateVhUnit);
	updateVhUnit(); 
}
initSize();

// object-fit
function objectFitPolyfill() {
	if ('objectFit' in document.documentElement.style === false) {
		Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
	    (image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));	
	    	image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';   
	  });
	}
}

export {
	objectFitPolyfill
};


