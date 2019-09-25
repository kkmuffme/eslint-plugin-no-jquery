# no-slide

Disallows the .slideDown/slideToggle/slideUp methods.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).slideDown();
$div.slideDown();
$( 'div' ).first().slideDown();
$( 'div' ).append( $( 'input' ).slideDown() );
$( 'div' ).slideToggle();
$div.slideToggle();
$( 'div' ).first().slideToggle();
$( 'div' ).append( $( 'input' ).slideToggle() );
$( 'div' ).slideUp();
$div.slideUp();
$( 'div' ).first().slideUp();
$( 'div' ).append( $( 'input' ).slideUp() );
```

✓ The following patterns are not considered errors:
```js
slideDown();
[].slideDown();
div.slideDown();
div.slideDown;
slideToggle();
[].slideToggle();
div.slideToggle();
div.slideToggle;
slideUp();
[].slideUp();
div.slideUp();
div.slideUp;
```