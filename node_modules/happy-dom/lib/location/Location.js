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
var URL_1 = __importDefault(require("./URL"));
/**
 *
 */
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    /**
     * Constructor.
     */
    function Location() {
        return _super.call(this, '') || this;
    }
    /**
     * Replaces the current resource with the one at the provided URL. The difference from the assign() method is that after using replace() the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it.
     *
     * @param url URL.
     */
    Location.prototype.replace = function (url) {
        this.parse(url);
    };
    /**
     * Loads the resource at the URL provided in parameter.
     *
     * Note: Will do the same thing as "replace()" as server-dom does not support loading the URL.
     *
     * @param url
     * @see this.replace()
     */
    Location.prototype.assign = function (url) {
        this.replace(url);
    };
    /**
     * Reloads the resource from the current URL.
     *
     * Note: Will do nothing as reloading is not supported in server-dom.
     */
    Location.prototype.reload = function () {
        // Do nothing
    };
    return Location;
}(URL_1.default));
exports.default = Location;
//# sourceMappingURL=Location.js.map