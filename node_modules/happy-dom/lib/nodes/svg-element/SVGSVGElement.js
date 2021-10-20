"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SVGGraphicsElement_1 = __importDefault(require("./SVGGraphicsElement"));
var SVGRect_1 = __importDefault(require("./SVGRect"));
var SVGPoint_1 = __importDefault(require("./SVGPoint"));
var SVGLength_1 = __importDefault(require("./SVGLength"));
var SVGAngle_1 = __importDefault(require("./SVGAngle"));
var SVGNumber_1 = __importDefault(require("./SVGNumber"));
var SVGTransform_1 = __importDefault(require("./SVGTransform"));
var SVGAnimatedRect_1 = __importDefault(require("./SVGAnimatedRect"));
/**
 * SVGSVGElement.
 */
var SVGSVGElement = /** @class */ (function (_super) {
    __extends(SVGSVGElement, _super);
    function SVGSVGElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SVGSVGElement.prototype, "preserveAspectRatio", {
        /**
         * Returns preserveAspectRatio.
         *
         * @returns PreserveAspectRatio.
         */
        get: function () {
            return this.getAttributeNS(null, 'preserveAspectRatio') || 'xMidYMid meet';
        },
        /**
         * Sets preserveAspectRatio.
         *
         * @param preserveAspectRatio PreserveAspectRatio.
         */
        set: function (preserveAspectRatio) {
            this.setAttributeNS(null, 'preserveAspectRatio', preserveAspectRatio);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGSVGElement.prototype, "width", {
        /**
         * Returns width.
         *
         * @returns Width.
         */
        get: function () {
            return this.getAttributeNS(null, 'width') || '';
        },
        /**
         * Sets width.
         *
         * @param width Width.
         */
        set: function (width) {
            this.setAttributeNS(null, 'width', width);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGSVGElement.prototype, "height", {
        /**
         * Returns height.
         *
         * @returns Height.
         */
        get: function () {
            return this.getAttributeNS(null, 'height') || '';
        },
        /**
         * Sets height.
         *
         * @param height Height.
         */
        set: function (height) {
            this.setAttributeNS(null, 'height', height);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGSVGElement.prototype, "x", {
        /**
         * Returns x.
         *
         * @returns X.
         */
        get: function () {
            return this.getAttributeNS(null, 'x') || '';
        },
        /**
         * Sets x.
         *
         * @param x X.
         */
        set: function (x) {
            this.setAttributeNS(null, 'x', x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGSVGElement.prototype, "y", {
        /**
         * Returns y.
         *
         * @returns Y.
         */
        get: function () {
            return this.getAttributeNS(null, 'y') || '';
        },
        /**
         * Sets y.
         *
         * @param y Y.
         */
        set: function (y) {
            this.setAttributeNS(null, 'y', y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGSVGElement.prototype, "contentScriptType", {
        /**
         * Returns contentScriptType.
         *
         * @returns ContentScriptType.
         */
        get: function () {
            return this.getAttributeNS(null, 'contentScriptType') || '';
        },
        /**
         * Sets contentScriptType.
         *
         * @param contentScriptType ContentScriptType.
         */
        set: function (contentScriptType) {
            this.setAttributeNS(null, 'contentScriptType', contentScriptType);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGSVGElement.prototype, "currentScale", {
        /**
         * Returns currentScale.
         *
         * @returns CurrentScale.
         */
        get: function () {
            var currentScale = this.getAttributeNS(null, 'currentScale');
            if (currentScale !== null) {
                return parseFloat(currentScale);
            }
            return 1;
        },
        /**
         * Sets currentScale.
         *
         * @param currentScale CurrentScale.
         */
        set: function (currentScale) {
            this.setAttributeNS(null, 'currentScale', String(currentScale));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGSVGElement.prototype, "viewport", {
        /**
         * Returns viewport.
         *
         * @returns SVG rect.
         */
        get: function () {
            return new SVGRect_1.default();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGSVGElement.prototype, "currentTranslate", {
        /**
         * Returns current translate.
         *
         * @returns SVG point.
         */
        get: function () {
            return new SVGPoint_1.default();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGSVGElement.prototype, "viewBox", {
        /**
         * Returns view box.
         *
         * @returns Viewbox.
         */
        get: function () {
            var rect = new SVGAnimatedRect_1.default();
            var viewBox = this.getAttribute('viewBox');
            var list = viewBox.split(/\s+/);
            rect.baseVal.x = Number(list[0]);
            rect.baseVal.y = Number(list[1]);
            rect.baseVal.width = Number(list[2]);
            rect.baseVal.height = Number(list[3]);
            return rect;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Pauses animation.
     */
    SVGSVGElement.prototype.pauseAnimations = function () { };
    /**
     * Unpauses animation.
     */
    SVGSVGElement.prototype.unpauseAnimations = function () { };
    /**
     * Returns "true" if animation is paused.
     *
     * @returns "true" if animation is paused.
     */
    SVGSVGElement.prototype.animationsPaused = function () {
        return false;
    };
    /**
     * Returns the current time in seconds relative to the start time for the current SVG document fragment.
     *
     * @returns Current time.
     */
    SVGSVGElement.prototype.getCurrentTime = function () {
        return 0;
    };
    /**
     * Sets current time.
     */
    SVGSVGElement.prototype.setCurrentTime = function () { };
    /**
     * Returns intersection list.
     *
     * @returns Intersection list.
     */
    SVGSVGElement.prototype.getIntersectionList = function () {
        return [];
    };
    /**
     * Returns enclousure list.
     *
     * @returns Enclousure list.
     */
    SVGSVGElement.prototype.getEnclosureList = function () {
        return [];
    };
    /**
     * Returns true if the rendered content of the given element intersects the supplied rectangle.
     *
     * @returns Intersection state.
     */
    SVGSVGElement.prototype.checkIntersection = function () {
        return false;
    };
    /**
     * Returns true if the rendered content of the given element is entirely contained within the supplied rectangle.
     *
     * @returns Enclousure state.
     */
    SVGSVGElement.prototype.checkEnclosure = function () {
        return false;
    };
    /**
     * Unselects any selected objects, including any selections of text strings and type-in bars.
     */
    SVGSVGElement.prototype.deselectAll = function () { };
    /**
     * Returns a number.
     *
     * @returns Number.
     */
    SVGSVGElement.prototype.createSVGNumber = function () {
        return new SVGNumber_1.default();
    };
    /**
     * Returns a length.
     *
     * @returns Length.
     */
    SVGSVGElement.prototype.createSVGLength = function () {
        return new SVGLength_1.default();
    };
    /**
     * Returns a angle.
     *
     * @returns Angle.
     */
    SVGSVGElement.prototype.createSVGAngle = function () {
        return new SVGAngle_1.default();
    };
    /**
     * Returns a point.
     *
     * @returns Point.
     */
    SVGSVGElement.prototype.createSVGPoint = function () {
        return new SVGPoint_1.default();
    };
    /**
     * Returns a rect.
     *
     * @returns Rect.
     */
    SVGSVGElement.prototype.createSVGRect = function () {
        return new SVGRect_1.default();
    };
    /**
     * Returns a transform.
     *
     * @returns Transform.
     */
    SVGSVGElement.prototype.createSVGTransform = function () {
        return new SVGTransform_1.default();
    };
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    SVGSVGElement.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        return _super.prototype.cloneNode.call(this, deep);
    };
    return SVGSVGElement;
}(SVGGraphicsElement_1.default));
exports.default = SVGSVGElement;
//# sourceMappingURL=SVGSVGElement.js.map