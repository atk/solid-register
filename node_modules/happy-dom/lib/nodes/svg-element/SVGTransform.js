"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SVG transform.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGTransform
 */
var SVGTransform = /** @class */ (function () {
    function SVGTransform() {
        this.type = 0;
        this.angle = 0;
    }
    /**
     * Set matrix.
     */
    SVGTransform.prototype.setMatrix = function () { };
    /**
     * Set translate.
     */
    SVGTransform.prototype.setTranslate = function () { };
    /**
     * Set scale.
     */
    SVGTransform.prototype.setScale = function () { };
    /**
     * Set rotate.
     */
    SVGTransform.prototype.setRotate = function () { };
    /**
     * Set skew x.
     */
    SVGTransform.prototype.setSkewX = function () { };
    /**
     * Set skew y.
     */
    SVGTransform.prototype.setSkewY = function () { };
    SVGTransform.SVG_TRANSFORM_UNKNOWN = 0;
    SVGTransform.SVG_TRANSFORM_MATRIX = 1;
    SVGTransform.SVG_TRANSFORM_TRANSLATE = 2;
    SVGTransform.SVG_TRANSFORM_SCALE = 3;
    SVGTransform.SVG_TRANSFORM_ROTATE = 4;
    SVGTransform.SVG_TRANSFORM_SKEWX = 5;
    SVGTransform.SVG_TRANSFORM_SKEWY = 6;
    return SVGTransform;
}());
exports.default = SVGTransform;
//# sourceMappingURL=SVGTransform.js.map