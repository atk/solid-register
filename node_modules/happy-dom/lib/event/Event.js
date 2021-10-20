"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
var Event = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    function Event(type, eventInit) {
        if (eventInit === void 0) { eventInit = null; }
        this.composed = false;
        this.currentTarget = null;
        this.target = null;
        this.bubbles = false;
        this.cancelable = false;
        this.defaultPrevented = false;
        this._immediatePropagationStopped = false;
        this._propagationStopped = false;
        this.type = null;
        this.type = type;
        if (eventInit) {
            this.bubbles = eventInit.bubbles || false;
            this.cancelable = eventInit.cancelable || false;
            this.composed = eventInit.composed || false;
        }
    }
    /**
     * Init event.
     *
     * @deprecated
     * @param type Type.
     * @param [bubbles=false] "true" if it bubbles.
     * @param [cancelable=false] "true" if it cancelable.
     */
    Event.prototype.initEvent = function (type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        this.type = type;
        this.bubbles = bubbles;
        this.cancelable = cancelable;
    };
    /**
     * Prevents default.
     */
    Event.prototype.preventDefault = function () {
        this.defaultPrevented = true;
    };
    /**
     * Stops immediate propagation.
     */
    Event.prototype.stopImmediatePropagation = function () {
        this._immediatePropagationStopped = true;
    };
    /**
     * Stops propagation.
     */
    Event.prototype.stopPropagation = function () {
        this._propagationStopped = true;
    };
    return Event;
}());
exports.default = Event;
//# sourceMappingURL=Event.js.map