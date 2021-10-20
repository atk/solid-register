"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DOMException_1 = __importDefault(require("../exception/DOMException"));
/**
 * Custom elements registry.
 */
var CustomElementRegistry = /** @class */ (function () {
    function CustomElementRegistry() {
        this._registry = {};
        this._callbacks = {};
    }
    /**
     * Defines a custom element class.
     *
     * @param tagName Tag name of element.
     * @param elementClass Element class.
     * @param [options] Options.
     * @param options.extends
     */
    CustomElementRegistry.prototype.define = function (tagName, elementClass, options) {
        var name = tagName.toLowerCase();
        if (!name.includes('-')) {
            throw new DOMException_1.default("Failed to execute 'define' on 'CustomElementRegistry': \"" +
                name +
                '" is not a valid custom element name.');
        }
        this._registry[name] = {
            elementClass: elementClass,
            extends: options && options.extends ? options.extends.toLowerCase() : null
        };
        // ObservedAttributes should only be called once by CustomElementRegistry (see #117)
        if (elementClass.prototype.attributeChangedCallback) {
            elementClass._observedAttributes = elementClass.observedAttributes;
        }
        if (this._callbacks[name]) {
            for (var _i = 0, _a = this._callbacks[name]; _i < _a.length; _i++) {
                var callback = _a[_i];
                callback();
            }
            delete this._callbacks[name];
        }
    };
    /**
     * Returns a defined element class.
     *
     * @param tagName Tag name of element.
     * @param HTMLElement Class defined.
     */
    CustomElementRegistry.prototype.get = function (tagName) {
        var name = tagName.toLowerCase();
        return this._registry[name] ? this._registry[name].elementClass : undefined;
    };
    /**
     * Upgrades a custom element directly, even before it is connected to its shadow root.
     *
     * Not implemented yet.
     *
     * @param _root Root node.
     */
    CustomElementRegistry.prototype.upgrade = function (_root) {
        // Do nothing
    };
    /**
     * When defined.
     *
     * @param tagName Tag name of element.
     * @returns Promise.
     */
    CustomElementRegistry.prototype.whenDefined = function (tagName) {
        var _this = this;
        var name = tagName.toLowerCase();
        if (this.get(name)) {
            return Promise.resolve();
        }
        return new Promise(function (resolve) {
            _this._callbacks[name] = _this._callbacks[name] || [];
            _this._callbacks[name].push(resolve);
        });
    };
    return CustomElementRegistry;
}());
exports.default = CustomElementRegistry;
//# sourceMappingURL=CustomElementRegistry.js.map