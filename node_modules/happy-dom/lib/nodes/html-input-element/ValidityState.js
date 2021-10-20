"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Input validity state.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
 */
var ValidityState = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param element Input element.
     */
    function ValidityState(element) {
        this.badInput = false;
        this.customError = false;
        this.patternMismatch = false;
        this.rangeOverflow = false;
        this.rangeUnderflow = false;
        this.stepMismatch = false;
        this.element = null;
        this.element = element;
    }
    Object.defineProperty(ValidityState.prototype, "tooLong", {
        /**
         * Returns validity.
         *
         * @returns "true" if valid.
         */
        get: function () {
            return this.element.maxLength && this.element.value.length > this.element.maxLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValidityState.prototype, "tooShort", {
        /**
         * Returns validity.
         *
         * @returns "true" if valid.
         */
        get: function () {
            return this.element.minLength && this.element.value.length < this.element.minLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValidityState.prototype, "typeMismatch", {
        /**
         * Returns validity.
         *
         * @returns "true" if valid.
         */
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValidityState.prototype, "valueMissing", {
        /**
         * Returns validity.
         *
         * @returns "true" if valid.
         */
        get: function () {
            return this.element.required && !this.element.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValidityState.prototype, "valid", {
        /**
         * Returns validity.
         *
         * @returns "true" if valid.
         */
        get: function () {
            for (var _i = 0, _a = Object.keys(this); _i < _a.length; _i++) {
                var key = _a[_i];
                if (this[key]) {
                    return false;
                }
            }
            return !this.tooLong && !this.tooShort && !this.typeMismatch && !this.valueMissing;
        },
        enumerable: false,
        configurable: true
    });
    return ValidityState;
}());
exports.default = ValidityState;
//# sourceMappingURL=ValidityState.js.map