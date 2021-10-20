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
var Event_1 = __importDefault(require("../Event"));
/**
 *
 */
var AnimationEvent = /** @class */ (function (_super) {
    __extends(AnimationEvent, _super);
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    function AnimationEvent(type, eventInit) {
        var _this = _super.call(this, type, eventInit) || this;
        _this.animationName = '';
        _this.elapsedTime = 0;
        _this.pseudoElement = '';
        _this.animationName = (eventInit === null || eventInit === void 0 ? void 0 : eventInit.animationName) || '';
        _this.elapsedTime = (eventInit === null || eventInit === void 0 ? void 0 : eventInit.elapsedTime) || 0;
        _this.pseudoElement = (eventInit === null || eventInit === void 0 ? void 0 : eventInit.pseudoElement) || '';
        return _this;
    }
    return AnimationEvent;
}(Event_1.default));
exports.default = AnimationEvent;
//# sourceMappingURL=AnimationEvent.js.map