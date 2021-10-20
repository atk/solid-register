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
var UIEvent_1 = __importDefault(require("../UIEvent"));
/**
 *
 */
var KeyboardEvent = /** @class */ (function (_super) {
    __extends(KeyboardEvent, _super);
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    function KeyboardEvent(type, eventInit) {
        if (eventInit === void 0) { eventInit = null; }
        var _this = _super.call(this, type, eventInit) || this;
        _this.altKey = false;
        _this.code = '';
        _this.ctrlKey = false;
        _this.isComposing = false;
        _this.key = '';
        _this.location = 0;
        _this.metaKey = false;
        _this.repeat = false;
        _this.shiftKey = false;
        if (eventInit) {
            _this.altKey = eventInit.altKey || false;
            _this.code = eventInit.code || '';
            _this.ctrlKey = eventInit.ctrlKey || false;
            _this.isComposing = eventInit.isComposing || false;
            _this.key = eventInit.key || '';
            _this.location = eventInit.location !== undefined ? eventInit.location : 0;
            _this.metaKey = eventInit.metaKey || false;
            _this.repeat = eventInit.repeat || false;
            _this.shiftKey = eventInit.shiftKey || false;
        }
        return _this;
    }
    KeyboardEvent.DOM_KEY_LOCATION_STANDARD = 0;
    KeyboardEvent.DOM_KEY_LOCATION_LEFT = 1;
    KeyboardEvent.DOM_KEY_LOCATION_RIGHT = 2;
    KeyboardEvent.DOM_KEY_LOCATION_NUMPAD = 3;
    return KeyboardEvent;
}(UIEvent_1.default));
exports.default = KeyboardEvent;
//# sourceMappingURL=KeyboardEvent.js.map