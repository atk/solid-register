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
var MouseEvent = /** @class */ (function (_super) {
    __extends(MouseEvent, _super);
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    function MouseEvent(type, eventInit) {
        if (eventInit === void 0) { eventInit = null; }
        var _this = _super.call(this, type, eventInit) || this;
        _this.altKey = false;
        _this.button = 0;
        _this.buttons = 0;
        _this.clientX = 0;
        _this.clientY = 0;
        _this.ctrlKey = false;
        _this.metaKey = false;
        _this.movementX = 0;
        _this.movementY = 0;
        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.region = '';
        _this.relatedTarget = null;
        _this.screenX = 0;
        _this.screenY = 0;
        _this.shiftKey = false;
        if (eventInit) {
            _this.altKey = eventInit.altKey || false;
            _this.button = eventInit.button !== undefined ? eventInit.button : 0;
            _this.buttons = eventInit.buttons !== undefined ? eventInit.buttons : 0;
            _this.clientX = eventInit.clientX !== undefined ? eventInit.clientX : 0;
            _this.clientY = eventInit.clientY !== undefined ? eventInit.clientY : 0;
            _this.ctrlKey = eventInit.ctrlKey || false;
            _this.metaKey = eventInit.metaKey || false;
            _this.region = eventInit.region || '';
            _this.relatedTarget = eventInit.relatedTarget || null;
            _this.screenX = eventInit.screenX !== undefined ? eventInit.screenX : 0;
            _this.screenY = eventInit.screenY !== undefined ? eventInit.screenY : 0;
            _this.shiftKey = eventInit.shiftKey || false;
        }
        return _this;
    }
    return MouseEvent;
}(UIEvent_1.default));
exports.default = MouseEvent;
//# sourceMappingURL=MouseEvent.js.map