// zoom
document.addEventListener('gesturestart', function(e) {
	e.preventDefault();
});

// double tap
document.addEventListener('touchstart', function(e) {
	e.preventDefault();
	e.target.click();
});

document.addEventListener('touchend', function(e) {
	e.preventDefault();
	e.target.click();
});
