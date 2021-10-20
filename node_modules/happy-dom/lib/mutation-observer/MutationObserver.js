"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DOMException_1 = __importDefault(require("../exception/DOMException"));
var MutationListener_1 = __importDefault(require("./MutationListener"));
/**
 * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
var MutationObserver = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param callback Callback.
     */
    function MutationObserver(callback) {
        this.target = null;
        this.listener = null;
        this.callback = callback;
    }
    /**
     * Starts observing.
     *
     * @param target Target.
     * @param options Options.
     */
    MutationObserver.prototype.observe = function (target, options) {
        if (!target) {
            throw new DOMException_1.default('Failed to observer. The first parameter "target" should be of type "Node".');
        }
        options = Object.assign({}, options, {
            attributeFilter: options.attributeFilter
                ? options.attributeFilter.map(function (name) { return name.toLowerCase(); })
                : null
        });
        this.target = target;
        this.listener = new MutationListener_1.default();
        this.listener.options = options;
        this.listener.callback = this.callback.bind(this);
        target._observe(this.listener);
    };
    /**
     * Disconnects.
     */
    MutationObserver.prototype.disconnect = function () {
        this.target._unobserve(this.listener);
    };
    /**
     * Takes records.
     */
    MutationObserver.prototype.takeRecords = function () {
        return [];
    };
    return MutationObserver;
}());
exports.default = MutationObserver;
//# sourceMappingURL=MutationObserver.js.map