'use strict';

const rule = require( '../../src/rules/no-is-function' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer typeof to $.isFunction';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-is-function', rule, {
	valid: [ 'isFunction()', 'myClass.isFunction()', '$div.isFunction()' ],
	invalid: [
		{
			code: '$.isFunction(expression(arg))',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: 'typeof expression(arg) === "function"'
		},
		{
			code: 'if($.isFunction(fn)){g();}',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: 'if(typeof fn === "function"){g();}'
		}
	]
} );