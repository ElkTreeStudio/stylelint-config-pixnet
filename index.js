"use strict"

module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
          "stylelint-order"
      ],
    "rules": {
      "selector-attribute-quotes": ["always"],
      "color-hex-length": ["short"],
      "indentation": 4,
      "number-leading-zero": ["never"],
      "order/properties-order": [
        "content",
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",
        "float",
        "display",
        "flex-direction",
        "flex-grow",
        "justify-content",
        "align-items",
        "overflow",
        "box-sizing",
        "width",
        "height",
        "border",
        "margin",
        "padding",
        "vertical-align",
        "font",
        "font-weight",
        "font-size",
        "line-height",
        "letter-spacing",
        "color",
        "text-align",
        "text-overflow",
        "background-color",
        "background-image",
        "border-radius",
        "border-collapse",
        "box-shadow",
        "opacity",
        "visibility",
        "white-space",
        "animation-name",
        "animation-duration",
        "animation-delay",
        "animation-fill-mode",
        "transform",
        "transition"
      ]
    }
};