'use strict';

const rule = require( '../rules/variable-pattern' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'jQuery collection names must match the variablePattern';

const extendedPattern = '^\\$.|^element$';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'variable-pattern', rule, {
	valid: [
		'var $div = $("<div>")',
		'$div = $("<div>")',
		'foo.$div = $("<div>")',
		'foo.bar.$div = $("<div>")',
		'text = $("<div>").text()',
		'data = $("<div>").data("foo")',
		'data = $("<div>").data(objectOrString)',
		'data = $.data($div, "foo")',
		'deferred = $.Deferred()',
		'foo[unknownName] = $("<div>")',
		'foo[$unknownName] = $("<div>")',
		'$foo[unknownName] = $("<div>")',
		'$foo[$unknownName] = $("<div>")',
		// It is not possible for the linter to detect that this is a jQuery collection,
		// but it is also the only way to store a plain array of jQuery collections.
		'foo[3] = $("<div>")',
		'list = $.map([], fn)',
		'width = $div.outerWidth()',
		'width = $div.outerWidth(true)',
		'width = $div.outerWidth(numberOrBool)',
		'n = $div.queue()',
		'n = $div.queue("fx")',
		'$foo.text = $("<div>").text()',
		'var foo = $.extend( {}, {} )',
		'foo.bar = $.extend( {}, {} )',
		{
			code: 'this.element = $("<div>")',
			settings: { 'no-jquery': { variablePattern: extendedPattern } }
		}
	],
	invalid: [
		{
			code: 'var div = $("<div>")',
			errors: [ { message: error, type: 'VariableDeclarator' } ]
		},
		{
			code: 'foo.div = $("<div>")',
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: '$foo.div = $("<div>")',
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: '$foo.$div.bar = $("<div>")',
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: 'div = $div.data("foo", "bar")',
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: 'div = $div.data({foo: "bar"})',
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: 'div = $div.outerWidth(30)',
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: 'div = $div.outerWidth(function(){})',
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: 'div = $div.outerWidth(number, true)',
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: 'div = $div.queue("fx", newQueueOrCallBack)',
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: 'div = $div.queue(newQueueOrCallBack)',
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: 'div = $div.queue([])',
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		}
	]
} );