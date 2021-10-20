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
var Blob_1 = __importDefault(require("./Blob"));
/**
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/File.
 *
 * Based on:
 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/file-api/File-impl.js (MIT licensed).
 */
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    /**
     * Constructor.
     *
     * @param bits File bits.
     * @param name File name.
     * @param [options] Options.
     * @param [options.type] MIME type.
     * @param [options.lastModifier] Last modified. Defaults to Date.now().
     * @param options.lastModified
     */
    function File(bits, name, options) {
        var _this = _super.call(this, bits, options) || this;
        _this.lastModified = null;
        _this.name = null;
        _this.name = name.replace(/\//g, ':');
        _this.lastModified = options && options.lastModified ? options.lastModified : Date.now();
        return _this;
    }
    return File;
}(Blob_1.default));
exports.default = File;
//# sourceMappingURL=File.js.map