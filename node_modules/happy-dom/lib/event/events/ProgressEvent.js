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
var ProgressEvent = /** @class */ (function (_super) {
    __extends(ProgressEvent, _super);
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    function ProgressEvent(type, eventInit) {
        if (eventInit === void 0) { eventInit = null; }
        var _this = _super.call(this, type) || this;
        _this.lengthComputable = false;
        _this.loaded = 0;
        _this.total = 0;
        if (eventInit) {
            _this.lengthComputable = eventInit.lengthComputable || false;
            _this.loaded = eventInit.loaded !== undefined ? eventInit.loaded : 0;
            _this.total = eventInit.total !== undefined ? eventInit.total : 0;
        }
        return _this;
    }
    return ProgressEvent;
}(Event_1.default));
exports.default = ProgressEvent;
//# sourceMappingURL=ProgressEvent.js.map