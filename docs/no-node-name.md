# no-node-name

Disallows the $.nodeName utility.

This rule is enabled in `plugin:no-jquery/deprecated-3.2`.

## Rule details

✗ The following patterns are considered errors:
```js
$.nodeName();
```

✓ The following patterns are not considered errors:
```js
nodeName();
myClass.nodeName();
$div.nodeName();
```