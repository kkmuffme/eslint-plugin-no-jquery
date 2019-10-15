'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	[
		// Browser
		'error',
		'load',
		'resize',
		'scroll',
		'unload',
		// Form
		'blur',
		'change',
		'focus',
		'focusin',
		'focusout',
		'select',
		'submit',
		// Keyboard
		'keydown',
		'keypress',
		'keyup',
		// Mouse
		'click',
		'contextmenu',
		'dblclick',
		'hover',
		'mousedown',
		'mouseenter',
		'mouseleave',
		'mousemove',
		'mouseout',
		'mouseover',
		'mouseup',
		// AJAX
		'ajaxStart',
		'ajaxStop',
		'ajaxComplete',
		'ajaxError',
		'ajaxSuccess',
		'ajaxSend'
	],
	( node ) => `Prefer $.on or $.trigger to $.${node.callee.property.name}`,
	'code',
	utils.eventShorthandFixer
);
