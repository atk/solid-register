"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
var Storage = /** @class */ (function () {
    function Storage() {
        this._store = {};
    }
    Object.defineProperty(Storage.prototype, "length", {
        /**
         * Returns length.
         *
         * @returns Length.
         */
        get: function () {
            return Object.keys(this._store).length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns name of the nth key.
     *
     * @param index Index.
     * @returns Name.
     */
    Storage.prototype.key = function (index) {
        var name = Object.keys(this._store)[index];
        return name === undefined ? null : name;
    };
    /**
     * Sets item.
     *
     * @param name Name.
     * @param item Item.
     */
    Storage.prototype.setItem = function (name, item) {
        this._store[name] = item;
    };
    /**
     * Returns item.
     *
     * @param name Name.
     * @returns Item.
     */
    Storage.prototype.getItem = function (name) {
        return this._store[name] === undefined ? null : this._store[name];
    };
    /**
     * Removes item.
     *
     * @param name Name.
     */
    Storage.prototype.removeItem = function (name) {
        delete this._store[name];
    };
    /**
     * Clears storage.
     */
    Storage.prototype.clear = function () {
        this._store = {};
    };
    return Storage;
}());
exports.default = Storage;
//# sourceMappingURL=Storage.js.map