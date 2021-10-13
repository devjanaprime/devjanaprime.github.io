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

	// Otherwise, show it
	show(elem);

};

var toggleById = function ( id ) {
    console.log( 'in toggleClosest:', id );
    toggle( document.getElementById( id ) );
};

toggleById( 'guitarChart0' );
toggleById( 'bassChart0' );
toggleById( 'drumChart0' );
toggleById( 'guitarChart1' );
toggleById( 'bassChart1' );
toggleById( 'drumChart1' );
toggleById( 'guitarChart3' );
toggleById( 'bassChart3' );
toggleById( 'drumChart3' );
toggleById( 'guitarChart2' );
toggleById( 'bassChart2' );
toggleById( 'drumChart2' );


