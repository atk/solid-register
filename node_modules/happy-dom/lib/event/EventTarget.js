"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Handles events.
 */
var EventTarget = /** @class */ (function () {
    function EventTarget() {
        this._listeners = {};
    }
    /**
     * Adds an event listener.
     *
     * @param type Event type.
     * @param listener Listener.
     */
    EventTarget.prototype.addEventListener = function (type, listener) {
        this._listeners[type] = this._listeners[type] || [];
        this._listeners[type].push(listener);
    };
    /**
     * Adds an event listener.
     *
     * @param type Event type.
     * @param listener Listener.
     */
    EventTarget.prototype.removeEventListener = function (type, listener) {
        if (this._listeners[type]) {
            var index = this._listeners[type].indexOf(listener);
            if (index !== -1) {
                this._listeners[type].splice(index);
            }
        }
    };
    /**
     * Dispatches an event.
     *
     * @param event Event.
     * @returns The return value is false if event is cancelable and at least one of the event handlers which handled this event called Event.preventDefault().
     */
    EventTarget.prototype.dispatchEvent = function (event) {
        if (!event.target) {
            event.target = this;
        }
        event.currentTarget = this;
        if (this._listeners[event.type]) {
            for (var _i = 0, _a = this._listeners[event.type]; _i < _a.length; _i++) {
                var listener = _a[_i];
                if (listener.handleEvent) {
                    listener.handleEvent(event);
                }
                else {
                    listener(event);
                }
                if (event._immediatePropagationStopped) {
                    return !(event.cancelable && event.defaultPrevented);
                }
            }
        }
        return !(event.cancelable && event.defaultPrevented);
    };
    return EventTarget;
}());
exports.default = EventTarget;
//# sourceMappingURL=EventTarget.js.map