var debug = false;
var isStatsOn = false;

try {
	var ua = navigator.userAgent.toLowerCase();
	if(ua.search('chrome') < 0 && ua.search('safari') < 0) {
		alert('This is an experiment that has only been tested in Chrome and Safari, and may not work in other browsers');
	}
} catch(err) {
	alert('This is an experiment that has only been tested in Chrome and Safari, and may not work in other browsers');
}

var runLoop = function() {
	app.update();
	app.draw();
}

var app = new App(document.getElementById('canvas'));

window.addEventListener('resize', app.resize);

document.addEventListener('mousemove', app.mousemove);
document.addEventListener('mousedown', app.mousedown);
document.addEventListener('mouseup', app.mouseup);

setInterval(runLoop,30);

var addStats = function() {
	// Draw fps
	var stats = new Stats();
	document.getElementById('fps').appendChild(stats.domElement);

	setInterval(function () {
	    stats.update();
	}, 1000/60);

	// Array Remove - By John Resig (MIT Licensed)
	Array.remove = function(array, from, to) {
	  var rest = array.slice((to || from) + 1 || array.length);
	  array.length = from < 0 ? array.length + from : from;
	  return array.push.apply(array, rest);
	};
}

document.addEventListener('keydown',function(e) {
	if(e.which == 27 && !isStatsOn) {
		addStats();
		isStatsOn = true;
	}
})

if(debug) {
	addStats();
	isStatsOn = true;
}

document.body.onselectstart = function() { return false; }