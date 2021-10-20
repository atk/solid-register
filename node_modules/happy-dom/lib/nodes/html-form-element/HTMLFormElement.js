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
 * HTML Form Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement.
 */
var HTMLFormElement = /** @class */ (function (_super) {
    __extends(HTMLFormElement, _super);
    function HTMLFormElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HTMLFormElement.prototype, "name", {
        /**
         * Returns name.
         *
         * @returns Name.
         */
        get: function () {
            return this.getAttributeNS(null, 'name') || '';
        },
        /**
         * Sets name.
         *
         * @param name Name.
         */
        set: function (name) {
            this.setAttributeNS(null, 'name', name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLFormElement.prototype, "method", {
        /**
         * Returns method.
         *
         * @returns Method.
         */
        get: function () {
            return this.getAttributeNS(null, 'method') || 'get';
        },
        /**
         * Sets method.
         *
         * @param method Method.
         */
        set: function (method) {
            this.setAttributeNS(null, 'method', method);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLFormElement.prototype, "target", {
        /**
         * Returns target.
         *
         * @returns Target.
         */
        get: function () {
            return this.getAttributeNS(null, 'target') || '';
        },
        /**
         * Sets target.
         *
         * @param target Target.
         */
        set: function (target) {
            this.setAttributeNS(null, 'target', target);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLFormElement.prototype, "action", {
        /**
         * Returns action.
         *
         * @returns Action.
         */
        get: function () {
            return this.getAttributeNS(null, 'action') || '';
        },
        /**
         * Sets action.
         *
         * @param action Action.
         */
        set: function (action) {
            this.setAttributeNS(null, 'action', action);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLFormElement.prototype, "encoding", {
        /**
         * Returns encoding.
         *
         * @returns Encoding.
         */
        get: function () {
            return this.getAttributeNS(null, 'encoding') || '';
        },
        /**
         * Sets encoding.
         *
         * @param encoding Encoding.
         */
        set: function (encoding) {
            this.setAttributeNS(null, 'encoding', encoding);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLFormElement.prototype, "enctype", {
        /**
         * Returns enctype.
         *
         * @returns Enctype.
         */
        get: function () {
            return this.getAttributeNS(null, 'enctype') || '';
        },
        /**
         * Sets enctype.
         *
         * @param enctype Enctype.
         */
        set: function (enctype) {
            this.setAttributeNS(null, 'enctype', enctype);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLFormElement.prototype, "autocomplete", {
        /**
         * Returns autocomplete.
         *
         * @returns Autocomplete.
         */
        get: function () {
            return this.getAttributeNS(null, 'autocomplete') || '';
        },
        /**
         * Sets autocomplete.
         *
         * @param autocomplete Autocomplete.
         */
        set: function (autocomplete) {
            this.setAttributeNS(null, 'autocomplete', autocomplete);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLFormElement.prototype, "acceptCharset", {
        /**
         * Returns accept charset.
         *
         * @returns Accept charset.
         */
        get: function () {
            return this.getAttributeNS(null, 'acceptcharset') || '';
        },
        /**
         * Sets accept charset.
         *
         * @param acceptCharset Accept charset.
         */
        set: function (acceptCharset) {
            this.setAttributeNS(null, 'acceptcharset', acceptCharset);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLFormElement.prototype, "noValidate", {
        /**
         * Returns no validate.
         *
         * @returns No validate.
         */
        get: function () {
            return this.getAttributeNS(null, 'novalidate') || '';
        },
        /**
         * Sets no validate.
         *
         * @param noValidate No validate.
         */
        set: function (noValidate) {
            this.setAttributeNS(null, 'novalidate', noValidate);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLFormElement.prototype, "elements", {
        /**
         * Returns input elements.
         *
         * @returns Elements.
         */
        get: function () {
            return this.querySelectorAll('input,textarea');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLFormElement.prototype, "length", {
        /**
         * Returns number of input elements.
         *
         * @returns Length.
         */
        get: function () {
            return this.elements.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Submits form.
     */
    HTMLFormElement.prototype.submit = function () { };
    /**
     * Resets form.
     */
    HTMLFormElement.prototype.reset = function () { };
    /**
     * Reports validity.
     */
    HTMLFormElement.prototype.reportValidity = function () { };
    /**
     * Checks validity.
     *
     * @returns "true" if validation does'nt fail.
     */
    HTMLFormElement.prototype.checkValidity = function () {
        return true;
    };
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    HTMLFormElement.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        return _super.prototype.cloneNode.call(this, deep);
    };
    return HTMLFormElement;
}(HTMLElement_1.default));
exports.default = HTMLFormElement;
//# sourceMappingURL=HTMLFormElement.js.map