"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * MediaList interface.
 */
var MediaList = /** @class */ (function () {
    function MediaList() {
        this.length = 0;
    }
    Object.defineProperty(MediaList.prototype, "mediaText", {
        /**
         * Media text.
         *
         * @returns Media text.
         */
        get: function () {
            var mediaText = [];
            for (var i = 0; i < this.length; i++) {
                mediaText.push(this[i]);
            }
            return mediaText.join(', ');
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns item.
     *
     * @param index Index.
     * @returns Item.
     */
    MediaList.prototype.item = function (index) {
        return this[index] || '';
    };
    /**
     * Appends a medium.
     *
     * @param medium Medium.
     */
    MediaList.prototype.appendMedium = function (medium) {
        this[this.length] = medium;
        this.length++;
    };
    /**
     * Deletes a medium.
     *
     * @param medium Medium.
     */
    MediaList.prototype.deleteMedium = function (medium) {
        var isDeleted = false;
        for (var i = 0; i < this.length; i++) {
            if (isDeleted) {
                this[i - 1] = this[i];
            }
            if (this[i] === medium) {
                isDeleted = true;
            }
        }
        if (isDeleted) {
            this.length--;
        }
    };
    return MediaList;
}());
exports.default = MediaList;
//# sourceMappingURL=MediaList.js.map