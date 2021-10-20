"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HistoryScrollRestorationEnum_1 = __importDefault(require("./HistoryScrollRestorationEnum"));
/**
 * History API.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/History.
 */
var History = /** @class */ (function () {
    function History() {
        this.length = 0;
        this.state = null;
        this._scrollRestoration = HistoryScrollRestorationEnum_1.default.auto;
    }
    Object.defineProperty(History.prototype, "scrollRestoration", {
        /**
         * Returns scroll restoration.
         *
         * @returns Sroll restoration.
         */
        get: function () {
            return this._scrollRestoration;
        },
        /**
         * Sets scroll restoration.
         *
         * @param scrollRestoration Sroll restoration.
         */
        set: function (scrollRestoration) {
            this._scrollRestoration = HistoryScrollRestorationEnum_1.default[scrollRestoration]
                ? scrollRestoration
                : this._scrollRestoration;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Goes to the previous page in session history.
     */
    History.prototype.back = function () {
        // Do nothing.
    };
    /**
     * Goes to the next page in session history.
     */
    History.prototype.forward = function () {
        // Do nothing.
    };
    /**
     * Load a specific page from the session history.
     *
     * @param delta Delta.
     * @param _delta
     */
    History.prototype.go = function (_delta) {
        // Do nothing.
    };
    /**
     * Pushes the given data onto the session history stack.
     *
     * @param state State.
     * @param title Title.
     * @param [url] URL.
     * @param _state
     * @param _title
     * @param _url
     */
    History.prototype.pushState = function (_state, _title, _url) {
        // Do nothing.
    };
    /**
     * This method modifies the current history entry, replacing it with a new state.
     *
     * @param state State.
     * @param title Title.
     * @param [url] URL.
     * @param _state
     * @param _title
     * @param _url
     */
    History.prototype.replaceState = function (_state, _title, _url) {
        // Do nothing.
    };
    return History;
}());
exports.default = History;
//# sourceMappingURL=History.js.map