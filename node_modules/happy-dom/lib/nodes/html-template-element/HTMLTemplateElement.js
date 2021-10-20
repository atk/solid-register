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
 * HTML Template Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement.
 */
var HTMLTemplateElement = /** @class */ (function (_super) {
    __extends(HTMLTemplateElement, _super);
    function HTMLTemplateElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._contentElement = null;
        return _this;
    }
    Object.defineProperty(HTMLTemplateElement.prototype, "content", {
        /**
         * Returns the content.
         *
         * @returns Content.
         */
        get: function () {
            if (!this._contentElement) {
                this._contentElement = this.ownerDocument.createDocumentFragment();
            }
            return this._contentElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTemplateElement.prototype, "previousSibling", {
        /**
         * Previous sibling.
         *
         * @returns Node.
         */
        get: function () {
            return this.content.previousSibling;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTemplateElement.prototype, "nextSibling", {
        /**
         * Next sibling.
         *
         * @returns Node.
         */
        get: function () {
            return this.content.nextSibling;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
        /**
         * First child.
         *
         * @returns Node.
         */
        get: function () {
            return this.content.firstChild;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTemplateElement.prototype, "lastChild", {
        /**
         * Last child.
         *
         * @returns Node.
         */
        get: function () {
            return this.content.lastChild;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Append a child node to childNodes.
     *
     * @param  node Node to append.
     * @returns Appended node.
     */
    HTMLTemplateElement.prototype.appendChild = function (node) {
        return this.content.appendChild(node);
    };
    /**
     * Remove Child element from childNodes array.
     *
     * @param node Node to remove.
     */
    HTMLTemplateElement.prototype.removeChild = function (node) {
        return this.content.removeChild(node);
    };
    /**
     * Inserts a node before another.
     *
     * @param newNode Node to insert.
     * @param referenceNode Node to insert before.
     * @returns Inserted node.
     */
    HTMLTemplateElement.prototype.insertBefore = function (newNode, referenceNode) {
        return this.content.insertBefore(newNode, referenceNode);
    };
    /**
     * Replaces a node with another.
     *
     * @param newChild New child.
     * @param oldChild Old child.
     * @returns Replaced node.
     */
    HTMLTemplateElement.prototype.replaceChild = function (newChild, oldChild) {
        return this.content.replaceChild(newChild, oldChild);
    };
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    HTMLTemplateElement.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        return _super.prototype.cloneNode.call(this, deep);
    };
    return HTMLTemplateElement;
}(HTMLElement_1.default));
exports.default = HTMLTemplateElement;
//# sourceMappingURL=HTMLTemplateElement.js.map