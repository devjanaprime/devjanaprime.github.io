// Show an element
var show = function (elem) {
	elem.style.display = 'block';
};

// Hide an element
var hide = function (elem) {
	elem.style.display = 'none';
};

// Toggle element visibility
var toggle = function (elem) {
	// If the element is visible, hide it
	if (window.getComputedStyle(elem).display != 'none') {
		hide(elem);
		return;
	}
	else{
		// Otherwise, show it
		show(elem);
	}
};

var toggleById = function ( id ) {
    console.log( 'in toggleClosest:', id );
    toggle( document.getElementById( id ) );
};

hide( document.getElementById( 'guitarChart0' ) );
hide( document.getElementById( 'bassChart0' ) );
hide( document.getElementById( 'guitarChart1' ) );
hide( document.getElementById( 'bassChart1' ) );
hide( document.getElementById( 'guitarChart2' ) );
hide( document.getElementById( 'bassChart2' ) );


