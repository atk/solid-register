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
var SVGElement_1 = __importDefault(require("./SVGElement"));
var DOMRect_1 = __importDefault(require("../element/DOMRect"));
var DOMMatrix_1 = __importDefault(require("./DOMMatrix"));
/**
 * SVG Graphics Element.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGGraphicsElement
 */
var SVGGraphicsElement = /** @class */ (function (_super) {
    __extends(SVGGraphicsElement, _super);
    function SVGGraphicsElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transform = {};
        return _this;
    }
    /**
     * Returns DOM rect.
     *
     * @returns DOM rect.
     */
    SVGGraphicsElement.prototype.getBBox = function () {
        return new DOMRect_1.default();
    };
    /**
     * Returns CTM.
     *
     * @returns CTM.
     */
    SVGGraphicsElement.prototype.getCTM = function () {
        return new DOMMatrix_1.default();
    };
    /**
     * Returns screen CTM.
     *
     * @returns Screen CTM.
     */
    SVGGraphicsElement.prototype.getScreenCTM = function () {
        return new DOMMatrix_1.default();
    };
    return SVGGraphicsElement;
}(SVGElement_1.default));
exports.default = SVGGraphicsElement;
//# sourceMappingURL=SVGGraphicsElement.js.map