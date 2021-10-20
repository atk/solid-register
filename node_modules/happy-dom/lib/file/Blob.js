"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/Blob.
 *
 * Based on:
 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/file-api/Blob-impl.js (MIT licensed).
 */
var Blob = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param bits Bits.
     * @param [options] Options.
     * @param [options.type] MIME type.
     */
    function Blob(bits, options) {
        this._buffer = null;
        this.type = '';
        var buffers = [];
        if (bits) {
            for (var _i = 0, bits_1 = bits; _i < bits_1.length; _i++) {
                var bit = bits_1[_i];
                var buffer = void 0;
                if (bit instanceof ArrayBuffer) {
                    buffer = Buffer.from(new Uint8Array(bit));
                }
                else if (bit instanceof Blob) {
                    buffer = bit._buffer;
                }
                else if (bit instanceof Buffer) {
                    buffer = bit;
                }
                else if (ArrayBuffer.isView(bit)) {
                    buffer = Buffer.from(new Uint8Array(bit.buffer, bit.byteOffset, bit.byteLength));
                }
                else {
                    buffer = Buffer.from(typeof bit === 'string' ? bit : String(bit));
                }
                buffers.push(buffer);
            }
        }
        this._buffer = Buffer.concat(buffers);
        if (options && options.type && options.type.match(/^[\u0020-\u007E]*$/)) {
            this.type = String(options.type).toLowerCase();
        }
    }
    Object.defineProperty(Blob.prototype, "size", {
        /**
         * Returns size.
         *
         * @returns Size.
         */
        get: function () {
            return this._buffer.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Slices the blob.
     *
     * @param start Start.
     * @param end End.
     * @param contentType Content type.
     * @returns New Blob.
     */
    Blob.prototype.slice = function (start, end, contentType) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = null; }
        if (contentType === void 0) { contentType = ''; }
        var size = this.size;
        var relativeStart;
        var relativeEnd;
        var relativeContentType;
        if (start === undefined) {
            relativeStart = 0;
        }
        else if (start < 0) {
            relativeStart = Math.max(size + start, 0);
        }
        else {
            relativeStart = Math.min(start, size);
        }
        if (end === null) {
            relativeEnd = size;
        }
        else if (end < 0) {
            relativeEnd = Math.max(size + end, 0);
        }
        else {
            relativeEnd = Math.min(end, size);
        }
        if (contentType === undefined) {
            relativeContentType = '';
        }
        else {
            // Sanitization (lower case and invalid char check) is done in the
            // Constructor
            relativeContentType = contentType;
        }
        var span = Math.max(relativeEnd - relativeStart, 0);
        var buffer = this._buffer;
        var slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        var blob = new Blob([], { type: relativeContentType });
        blob._buffer = slicedBuffer;
        return blob;
    };
    /**
     * Closes the blob.
     *
     * @returns String.
     */
    Blob.prototype.toString = function () {
        return '[object Blob]';
    };
    return Blob;
}());
exports.default = Blob;
//# sourceMappingURL=Blob.js.map