'use strict';

module.exports = {
  extends: 'stylelint-config-primer',
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'string-quotes': 'single',
    'max-empty-lines': 5,
    'selector-class-pattern': null,
    'plugin/no-unsupported-browser-features': null,
    'order/properties-order': [
      [
        {
          order: 'flexible',
          properties: [
            'content'
          ]
        },
        {
          order: 'flexible',
          properties: [
            'display',
            'float',
            'clear',
            'flex',
            'flex-grow',
            'flex-shrink',
            'flex-basis',
            'flex-direction',
            'flex-wrap',
            'flex-flow',
            'align-items',
            'align-self',
            'justify-content'
          ]
        },
        {
          order: 'flexible',
          properties: [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index'
          ]
        },
        {
          order: 'flexible',
          properties: [
            'visibility',
            'opacity'
          ]
        },
        {
          order: 'flexible',
          properties: [
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left'
          ]
        },
        {
          order: 'flexible',
          properties: [
            'width',
            'max-width',
            'min-width',
            'height',
            'max-height',
            'min-height'
          ]
        },
        {
          order: 'flexible',
          properties: [
            'font',
            'font-size',
            'font-weight',
            'font-style',
            'font-family',
            'font-variant',
            'font-feature',
            'font-kerning',
            'font-stretch',
            'line-height',
            'color',
            'text',
            'text-align',
            'letter-spacing',
            'white-space',
            'vertical-align'
          ]
        },
        {
          order: 'flexible',
          properties: [
            'cursor',
            'user-select',
            'pointer-events'
          ]
        },
        {
          order: 'flexible',
          properties: [
            'background',
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius'
          ]
        }
      ],
      {
        unspecified: 'bottom'
      }
    ]
  }
};
