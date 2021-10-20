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
var ScriptUtility_1 = __importDefault(require("./ScriptUtility"));
/**
 * HTML Script Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement.
 */
var HTMLScriptElement = /** @class */ (function (_super) {
    __extends(HTMLScriptElement, _super);
    function HTMLScriptElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onerror = null;
        _this.onload = null;
        _this._evaluateScript = true;
        return _this;
    }
    Object.defineProperty(HTMLScriptElement.prototype, "isConnected", {
        /**
         * Returns "true" if connected to DOM.
         *
         * @returns "true" if connected.
         */
        get: function () {
            return this._isConnected;
        },
        /**
         * Sets the connected state.
         *
         * @param isConnected "true" if connected.
         */
        set: function (isConnected) {
            if (this._isConnected !== isConnected) {
                this._isConnected = isConnected;
                for (var _i = 0, _a = this.childNodes; _i < _a.length; _i++) {
                    var child = _a[_i];
                    child.isConnected = isConnected;
                }
                // eslint-disable-next-line
                if (this.shadowRoot) {
                    // eslint-disable-next-line
                    this.shadowRoot.isConnected = isConnected;
                }
                if (isConnected && this._evaluateScript) {
                    var src = this.getAttributeNS(null, 'src');
                    if (src !== null) {
                        ScriptUtility_1.default.loadExternalScript(this);
                    }
                    else {
                        var textContent = this.textContent;
                        if (textContent) {
                            this.ownerDocument.defaultView.eval(textContent);
                        }
                    }
                }
                if (isConnected && this.connectedCallback) {
                    this.connectedCallback();
                }
                else if (!isConnected && this.disconnectedCallback) {
                    this.disconnectedCallback();
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLScriptElement.prototype, "type", {
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
    Object.defineProperty(HTMLScriptElement.prototype, "src", {
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
    Object.defineProperty(HTMLScriptElement.prototype, "charset", {
        /**
         * Returns charset.
         *
         * @returns Charset.
         */
        get: function () {
            return this.getAttributeNS(null, 'charset') || '';
        },
        /**
         * Sets charset.
         *
         * @param charset Charset.
         */
        set: function (charset) {
            this.setAttributeNS(null, 'charset', charset);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLScriptElement.prototype, "lang", {
        /**
         * Returns lang.
         *
         * @returns Lang.
         */
        get: function () {
            return this.getAttributeNS(null, 'lang') || '';
        },
        /**
         * Sets lang.
         *
         * @param lang Lang.
         */
        set: function (lang) {
            this.setAttributeNS(null, 'lang', lang);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLScriptElement.prototype, "async", {
        /**
         * Returns async.
         *
         * @returns Async.
         */
        get: function () {
            return this.getAttributeNS(null, 'async') !== null;
        },
        /**
         * Sets async.
         *
         * @param async Async.
         */
        set: function (async) {
            if (!async) {
                this.removeAttributeNS(null, 'async');
            }
            else {
                this.setAttributeNS(null, 'async', '');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLScriptElement.prototype, "defer", {
        /**
         * Returns defer.
         *
         * @returns Defer.
         */
        get: function () {
            return this.getAttributeNS(null, 'defer') !== null;
        },
        /**
         * Sets defer.
         *
         * @param defer Defer.
         */
        set: function (defer) {
            if (!defer) {
                this.removeAttributeNS(null, 'defer');
            }
            else {
                this.setAttributeNS(null, 'defer', '');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLScriptElement.prototype, "text", {
        /**
         * Returns text.
         *
         * @returns Text.
         */
        get: function () {
            return this.textContent;
        },
        /**
         * Sets text.
         *
         * @param text Text.
         */
        set: function (text) {
            this.textContent = text;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The setAttributeNode() method adds a new Attr node to the specified element.
     *
     * @override
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    HTMLScriptElement.prototype.setAttributeNode = function (attribute) {
        var replacedAttribute = _super.prototype.setAttributeNode.call(this, attribute);
        if (attribute.name === 'src' && attribute.value !== null && this.isConnected) {
            ScriptUtility_1.default.loadExternalScript(this);
        }
        return replacedAttribute;
    };
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    HTMLScriptElement.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        return _super.prototype.cloneNode.call(this, deep);
    };
    return HTMLScriptElement;
}(HTMLElement_1.default));
exports.default = HTMLScriptElement;
//# sourceMappingURL=HTMLScriptElement.js.map