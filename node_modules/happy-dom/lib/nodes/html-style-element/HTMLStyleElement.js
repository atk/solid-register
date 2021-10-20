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
var CSSStyleSheet_1 = __importDefault(require("../../css/CSSStyleSheet"));
var HTMLElement_1 = __importDefault(require("../html-element/HTMLElement"));
/**
 * HTML Style Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement.
 */
var HTMLStyleElement = /** @class */ (function (_super) {
    __extends(HTMLStyleElement, _super);
    function HTMLStyleElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HTMLStyleElement.prototype, "sheet", {
        /**
         * Returns CSS style sheet.
         *
         * @returns CSS style sheet.
         */
        get: function () {
            if (!this._isConnected) {
                return null;
            }
            var styleSheet = new CSSStyleSheet_1.default();
            styleSheet.replaceSync(this.innerText);
            return styleSheet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLStyleElement.prototype, "media", {
        /**
         * Returns media.
         *
         * @returns Media.
         */
        get: function () {
            return this.getAttributeNS(null, 'media') || '';
        },
        /**
         * Sets media.
         *
         * @param media Media.
         */
        set: function (media) {
            this.setAttributeNS(null, 'media', media);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLStyleElement.prototype, "type", {
        /**
         * Returns type.
         *
         * @returns Type.
         */
        get: function () {
            return this.getAttributeNS(null, 'type') || '';
        },
        /**
         * Sets type.
         *
         * @param type Type.
         */
        set: function (type) {
            this.setAttributeNS(null, 'type', type);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLStyleElement.prototype, "disabled", {
        /**
         * Returns disabled.
         *
         * @returns Disabled.
         */
        get: function () {
            return this.getAttributeNS(null, 'disabled') !== null;
        },
        /**
         * Sets disabled.
         *
         * @param disabled Disabled.
         */
        set: function (disabled) {
            if (!disabled) {
                this.removeAttributeNS(null, 'disabled');
            }
            else {
                this.setAttributeNS(null, 'disabled', '');
            }
        },
        enumerable: false,
        configurable: true
    });
    return HTMLStyleElement;
}(HTMLElement_1.default));
exports.default = HTMLStyleElement;
//# sourceMappingURL=HTMLStyleElement.js.map