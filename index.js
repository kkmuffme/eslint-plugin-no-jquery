'use strict'

module.exports = {
  rules: {
    'no-ajax': require('./rules/no-ajax'),
    'no-ajax-events': require('./rules/no-ajax-events'),
    'no-and-self': require('./rules/no-and-self'),
    'no-animate': require('./rules/no-animate'),
    'no-attr': require('./rules/no-attr'),
    'no-bind': require('./rules/no-bind'),
    'no-class': require('./rules/no-class'),
    'no-clone': require('./rules/no-clone'),
    'no-closest': require('./rules/no-closest'),
    'no-css': require('./rules/no-css'),
    'no-data': require('./rules/no-data'),
    'no-deferred': require('./rules/no-deferred'),
    'no-delegate': require('./rules/no-delegate'),
    'no-die': require('./rules/no-die'),
    'no-each': require('./rules/no-each'),
    'no-each-collection': require('./rules/no-each-collection'),
    'no-each-util': require('./rules/no-each-util'),
    'no-event-shorthand': require('./rules/no-event-shorthand'),
    'no-extend': require('./rules/no-extend'),
    'no-fade': require('./rules/no-fade'),
    'no-filter': require('./rules/no-filter'),
    'no-find': require('./rules/no-find'),
    'no-global-eval': require('./rules/no-global-eval'),
    'no-grep': require('./rules/no-grep'),
    'no-has': require('./rules/no-has'),
    'no-hide': require('./rules/no-hide'),
    'no-html': require('./rules/no-html'),
    'no-in-array': require('./rules/no-in-array'),
    'no-is-array': require('./rules/no-is-array'),
    'no-is-function': require('./rules/no-is-function'),
    'no-is-window': require('./rules/no-is-window'),
    'no-is': require('./rules/no-is'),
    'no-live': require('./rules/no-live'),
    'no-load': require('./rules/no-load'),
    'no-map': require('./rules/no-map'),
    'no-map-collection': require('./rules/no-map-collection'),
    'no-map-util': require('./rules/no-map-util'),
    'no-merge': require('./rules/no-merge'),
    'no-noop': require('./rules/no-noop'),
    'no-param': require('./rules/no-param'),
    'no-parent': require('./rules/no-parent'),
    'no-parents': require('./rules/no-parents'),
    'no-parse-html': require('./rules/no-parse-html'),
    'no-parse-html-literal': require('./rules/no-parse-html-literal'),
    'no-parse-json': require('./rules/no-parse-json'),
    'no-prop': require('./rules/no-prop'),
    'no-proxy': require('./rules/no-proxy'),
    'no-ready': require('./rules/no-ready'),
    'no-serialize': require('./rules/no-serialize'),
    'no-global-selector': require('./rules/no-global-selector'),
    'no-show': require('./rules/no-show'),
    'no-size': require('./rules/no-size'),
    'no-sizzle': require('./rules/no-sizzle'),
    'no-slide': require('./rules/no-slide'),
    'no-submit': require('./rules/no-submit'),
    'no-text': require('./rules/no-text'),
    'no-toggle': require('./rules/no-toggle'),
    'no-trigger': require('./rules/no-trigger'),
    'no-trim': require('./rules/no-trim'),
    'no-type': require('./rules/no-type'),
    'no-unbind': require('./rules/no-unbind'),
    'no-undelegate': require('./rules/no-undelegate'),
    'no-unique': require('./rules/no-unique'),
    'no-val': require('./rules/no-val'),
    'no-when': require('./rules/no-when'),
    'no-wrap': require('./rules/no-wrap')
  },
  configs: {
    // Use this profile if you're writing code and want to avoid all known deprecated jQuery tools.
    deprecated: {
      rules: {
        'jquery/no-ajax': 2,
        'jquery/no-ajax-events': 2,
        'jquery/no-and-self': 2,
        'jquery/no-animate': 2,
        'jquery/no-attr': 2,
        'jquery/no-bind': 2,
        'jquery/no-class': 2,
        'jquery/no-clone': 2,
        'jquery/no-closest': 2,
        'jquery/no-css': 2,
        'jquery/no-data': 2,
        'jquery/no-deferred': 2,
        'jquery/no-delegate': 2,
        'jquery/no-die': 2,
        'jquery/no-each': 2,
        'jquery/no-each-collection': 2,
        'jquery/no-each-util': 2,
        'jquery/no-event-shorthand': 2,
        'jquery/no-extend': 2,
        'jquery/no-fade': 2,
        'jquery/no-filter': 2,
        'jquery/no-find': 2,
        'jquery/no-global-eval': 2,
        'jquery/no-grep': 2,
        'jquery/no-has': 2,
        'jquery/no-hide': 2,
        'jquery/no-html': 2,
        'jquery/no-in-array': 2,
        'jquery/no-is-array': 2,
        'jquery/no-is-function': 2,
        'jquery/no-is-window': 2,
        'jquery/no-is': 2,
        'jquery/no-live': 2,
        'jquery/no-load': 2,
        'jquery/no-map': 2,
        'jquery/no-map-collection': 2,
        'jquery/no-map-util': 2,
        'jquery/no-merge': 2,
        'jquery/no-noop': 2,
        'jquery/no-param': 2,
        'jquery/no-parent': 2,
        'jquery/no-parents': 2,
        'jquery/no-parse-html': 2,
        'jquery/no-parse-html-literal': 2,
        'jquery/no-parse-json': 2,
        'jquery/no-prop': 2,
        'jquery/no-proxy': 2,
        'jquery/no-ready': 2,
        'jquery/no-serialize': 2,
        'jquery/no-global-selector': 2,
        'jquery/no-show': 2,
        'jquery/no-size': 2,
        'jquery/no-sizzle': 2,
        'jquery/no-slide': 2,
        'jquery/no-submit': 2,
        'jquery/no-text': 2,
        'jquery/no-toggle': 2,
        'jquery/no-trigger': 2,
        'jquery/no-trim': 2,
        'jquery/no-type': 2,
        'jquery/no-unbind': 2,
        'jquery/no-undelegate': 2,
        'jquery/no-unique': 2,
        'jquery/no-val': 2,
        'jquery/no-when': 2,
        'jquery/no-wrap': 2
      }
    },
    slim: {
      rules: {
        'jquery/no-ajax': 2,
        'jquery/no-animate': 2,
        'jquery/no-fade': 2,
        'jquery/no-hide': 2,
        'jquery/no-load': 2,
        'jquery/no-param': 2,
        'jquery/no-serialize': 2,
        'jquery/no-show': 2,
        'jquery/no-slide': 2,
        'jquery/no-toggle': 2
      }
    },
    // Use this profile if you're writing code targetting jQuery 3.3.x environments.
    'deprecated-3.3': {
      extends: 'plugin:jquery/deprecated-3.0',
      rules: {
        'no-is-function': 2,
        'no-is-window': 2
      }
    },
    // Use this profile if you're writing code targetting jQuery 3.0.x environments.
    'deprecated-3.0': {
      extends: 'plugin:jquery/deprecated-1.10',
      rules: {
        'jquery/no-bind': 2,
        'jquery/no-unbind': 2,
        'jquery/no-delegate': 2,
        'jquery/no-undelegate': 2,
        // FIXME: `$.fx.interval`
        'jquery/no-parse-json': 2,
        'jquery/no-unique': 2
      }
    },
    // Use this profile if you're writing code targetting jQuery 1.10.x environments.
    'deprecated-1.10': {
      extends: 'plugin:jquery/deprecated-1.9',
      rules: {
        // FIXME: `$().context`
      }
    },
    // Use this profile if you're writing code targetting jQuery 1.9.x environments.
    'deprecated-1.9': {
      extends: 'plugin:jquery/deprecated-1.8',
      rules: {
        // FIXME: `$.support`
      }
    },
    // Use this profile if you're writing code targetting jQuery 1.8.x environments.
    'deprecated-1.8': {
      extends: 'plugin:jquery/deprecated-1.7',
      rules: {
        'jquery/no-and-self': 2,
        // FIXME: `deferred.pipe()`
        // FIXME: `$().error`
        'jquery/no-load': 2,
        'jquery/no-size': 2,
        'jquery/no-toggle': 2
        // FIXME: `$().unload`
      }
    },
    // Use this profile if you're writing code targetting jQuery 1.7.x environments.
    'deprecated-1.7': {
      extends: 'plugin:jquery/deprecated-1.3',
      rules: {
        // FIXME: `deferred.isRejected()/isResolved`
        'jquery/no-die': 2,
        'jquery/no-live': 2,
        // FIXME: `$.sub() (removed 1.9)`
        'jquery/no-global-selector': 2
      }
    },
    // Use this profile if you're writing code targetting jQuery 1.3.x environments.
    'deprecated-1.3': {
      rules: {
        // FIXME: `$.boxModel`
        // FIXME: `$.browser`
      }
    }
  }
}
