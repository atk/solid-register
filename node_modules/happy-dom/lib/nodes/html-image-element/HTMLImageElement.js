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
var HTMLElement_1 = __importDefault(require("../html-element/HTMLElement"));
/**
 * HTML Image Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement.
 */
var HTMLImageElement = /** @class */ (function (_super) {
    __extends(HTMLImageElement, _super);
    function HTMLImageElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.complete = false;
        _this.naturalHeight = 0;
        _this.naturalWidth = 0;
        _this.crossOrigin = null;
        _this.decoding = 'auto';
        _this.loading = 'auto';
        _this.x = 0;
        _this.y = 0;
        return _this;
    }
    Object.defineProperty(HTMLImageElement.prototype, "alt", {
        /**
         * Returns alt.
         *
         * @returns Alt.
         */
        get: function () {
            return this.getAttributeNS(null, 'alt') || '';
        },
        /**
         * Sets alt.
         *
         * @param alt Alt.
         */
        set: function (alt) {
            this.setAttributeNS(null, 'alt', alt);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLImageElement.prototype, "currentSrc", {
        /**
         * Returns current src.
         *
         * @returns Current src.
         */
        get: function () {
            return this.src;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLImageElement.prototype, "height", {
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
    Object.defineProperty(HTMLImageElement.prototype, "isMap", {
        /**
         * Returns is map.
         *
         * @returns Is map.
         */
        get: function () {
            return this.getAttributeNS(null, 'ismap') !== null;
        },
        /**
         * Sets is map.
         *
         * @param ismap Is map.
         */
        set: function (isMap) {
            if (!isMap) {
                this.removeAttributeNS(null, 'ismap');
            }
            else {
                this.setAttributeNS(null, 'ismap', '');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLImageElement.prototype, "referrerPolicy", {
        /**
         * Returns referrer policy.
         *
         * @returns Referrer policy.
         */
        get: function () {
            return this.getAttributeNS(null, 'referrerpolicy') || '';
        },
        /**
         * Sets referrer policy.
         *
         * @param referrerPolicy Referrer policy.
         */
        set: function (referrerPolicy) {
            this.setAttributeNS(null, 'referrerpolicy', referrerPolicy);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLImageElement.prototype, "sizes", {
        /**
         * Returns sizes.
         *
         * @returns Sizes.
         */
        get: function () {
            return this.getAttributeNS(null, 'sizes') || '';
        },
        /**
         * Sets sizes.
         *
         * @param sizes Sizes.
         */
        set: function (sizes) {
            this.setAttributeNS(null, 'sizes', sizes);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLImageElement.prototype, "src", {
        /**
         * Returns source.
         *
         * @returns Source.
         */
        get: function () {
            return this.getAttributeNS(null, 'src') || '';
        },
        /**
         * Sets source.
         *
         * @param source Source.
         */
        set: function (src) {
            this.setAttributeNS(null, 'src', src);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLImageElement.prototype, "srcset", {
        /**
         * Returns srcset.
         *
         * @returns Source.
         */
        get: function () {
            return this.getAttributeNS(null, 'srcset') || '';
        },
        /**
         * Sets src set.
         *
         * @param srcset Src set.
         */
        set: function (srcset) {
            this.setAttributeNS(null, 'srcset', srcset);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLImageElement.prototype, "useMap", {
        /**
         * Returns use map.
         *
         * @returns Use map.
         */
        get: function () {
            return this.getAttributeNS(null, 'usemap') || '';
        },
        /**
         * Sets is map.
         *
         * @param useMap Is map.
         */
        set: function (useMap) {
            this.setAttributeNS(null, 'usemap', useMap);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLImageElement.prototype, "width", {
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
    /**
     * The decode() method of the HTMLImageElement interface returns a Promise that resolves when the image is decoded and it is safe to append the image to the DOM.
     *
     * @returns Promise.
     */
    HTMLImageElement.prototype.decode = function () {
        return Promise.resolve();
    };
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    HTMLImageElement.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        return _super.prototype.cloneNode.call(this, deep);
    };
    return HTMLImageElement;
}(HTMLElement_1.default));
exports.default = HTMLImageElement;
//# sourceMappingURL=HTMLImageElement.js.map