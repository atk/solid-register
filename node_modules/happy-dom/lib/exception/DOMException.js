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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * DOM Exception.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/DOMException/DOMException.
 */
var DOMException = /** @class */ (function (_super) {
    __extends(DOMException, _super);
    /**
     * Constructor.
     *
     * @param message Message.
     * @param name Name.
     */
    function DOMException(message, name) {
        if (name === void 0) { name = null; }
        var _this = _super.call(this, message) || this;
        if (name) {
            _this.name = name;
        }
        return _this;
    }
    return DOMException;
}(Error));
exports.default = DOMException;
//# sourceMappingURL=DOMException.js.map