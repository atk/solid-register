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
var Event_1 = __importDefault(require("../../event/Event"));
var DOMException_1 = __importDefault(require("../../exception/DOMException"));
var DOMExceptionNameEnum_1 = __importDefault(require("../../exception/DOMExceptionNameEnum"));
var HTMLElement_1 = __importDefault(require("../html-element/HTMLElement"));
var HTMLInputElementSelectionDirectionEnum_1 = __importDefault(require("../html-input-element/HTMLInputElementSelectionDirectionEnum"));
var HTMLInputElementSelectionModeEnum_1 = __importDefault(require("../html-input-element/HTMLInputElementSelectionModeEnum"));
/**
 * HTML Text Area Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement.
 */
var HTMLTextAreaElement = /** @class */ (function (_super) {
    __extends(HTMLTextAreaElement, _super);
    function HTMLTextAreaElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'textarea';
        _this._value = null;
        _this._selectionStart = null;
        _this._selectionEnd = null;
        _this._selectionDirection = HTMLInputElementSelectionDirectionEnum_1.default.none;
        _this.defaultValue = '';
        return _this;
    }
    Object.defineProperty(HTMLTextAreaElement.prototype, "minLength", {
        /**
         * Returns minlength.
         *
         * @returns Min length.
         */
        get: function () {
            var minLength = this.getAttributeNS(null, 'minlength');
            if (minLength !== null) {
                return parseInt(minLength);
            }
            return -1;
        },
        /**
         * Sets minlength.
         *
         * @param minLength Min length.
         */
        set: function (minlength) {
            this.setAttributeNS(null, 'minlength', String(minlength));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "maxLength", {
        /**
         * Returns maxlength.
         *
         * @returns Max length.
         */
        get: function () {
            var maxLength = this.getAttributeNS(null, 'maxlength');
            if (maxLength !== null) {
                return parseInt(maxLength);
            }
            return -1;
        },
        /**
         * Sets maxlength.
         *
         * @param maxlength Max length.
         */
        set: function (maxLength) {
            this.setAttributeNS(null, 'maxlength', String(maxLength));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "name", {
        /**
         * Returns name.
         *
         * @returns Name.
         */
        get: function () {
            return this.getAttributeNS(null, 'name') || '';
        },
        /**
         * Sets name.
         *
         * @param name Name.
         */
        set: function (name) {
            this.setAttributeNS(null, 'name', name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "placeholder", {
        /**
         * Returns placeholder.
         *
         * @returns Placeholder.
         */
        get: function () {
            return this.getAttributeNS(null, 'placeholder') || '';
        },
        /**
         * Sets placeholder.
         *
         * @param placeholder Placeholder.
         */
        set: function (placeholder) {
            this.setAttributeNS(null, 'placeholder', placeholder);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "inputmode", {
        /**
         * Returns inputmode.
         *
         * @returns Inputmode.
         */
        get: function () {
            return this.getAttributeNS(null, 'inputmode') || '';
        },
        /**
         * Sets inputmode.
         *
         * @param inputmode Inputmode.
         */
        set: function (inputmode) {
            this.setAttributeNS(null, 'inputmode', inputmode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "cols", {
        /**
         * Returns cols.
         *
         * @returns Cols.
         */
        get: function () {
            return this.getAttributeNS(null, 'cols') || '';
        },
        /**
         * Sets cols.
         *
         * @param cols Cols.
         */
        set: function (cols) {
            this.setAttributeNS(null, 'cols', cols);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "rows", {
        /**
         * Returns rows.
         *
         * @returns Rows.
         */
        get: function () {
            return this.getAttributeNS(null, 'rows') || '';
        },
        /**
         * Sets rows.
         *
         * @param rows Rows.
         */
        set: function (rows) {
            this.setAttributeNS(null, 'rows', rows);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "autocomplete", {
        /**
         * Returns autocomplete.
         *
         * @returns Autocomplete.
         */
        get: function () {
            return this.getAttributeNS(null, 'autocomplete') || '';
        },
        /**
         * Sets autocomplete.
         *
         * @param autocomplete Autocomplete.
         */
        set: function (autocomplete) {
            this.setAttributeNS(null, 'autocomplete', autocomplete);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "readOnly", {
        /**
         * Returns readOnly.
         *
         * @returns ReadOnly.
         */
        get: function () {
            return this.getAttributeNS(null, 'readonly') !== null;
        },
        /**
         * Sets readOnly.
         *
         * @param readOnly ReadOnly.
         */
        set: function (readOnly) {
            if (!readOnly) {
                this.removeAttributeNS(null, 'readonly');
            }
            else {
                this.setAttributeNS(null, 'readonly', '');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "disabled", {
        /**
         * Returns disabled.
         *
         * @returns Disabled.
         */
        get: function () {
            return this.getAttributeNS(null, 'disabled') !== null;
        },
        /**
         * Sets disabled.
         *
         * @param disabled Disabled.
         */
        set: function (disabled) {
            if (!disabled) {
                this.removeAttributeNS(null, 'disabled');
            }
            else {
                this.setAttributeNS(null, 'disabled', '');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "autofocus", {
        /**
         * Returns autofocus.
         *
         * @returns Autofocus.
         */
        get: function () {
            return this.getAttributeNS(null, 'autofocus') !== null;
        },
        /**
         * Sets autofocus.
         *
         * @param autofocus Autofocus.
         */
        set: function (autofocus) {
            if (!autofocus) {
                this.removeAttributeNS(null, 'autofocus');
            }
            else {
                this.setAttributeNS(null, 'autofocus', '');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "required", {
        /**
         * Returns required.
         *
         * @returns Required.
         */
        get: function () {
            return this.getAttributeNS(null, 'required') !== null;
        },
        /**
         * Sets required.
         *
         * @param required Required.
         */
        set: function (required) {
            if (!required) {
                this.removeAttributeNS(null, 'required');
            }
            else {
                this.setAttributeNS(null, 'required', '');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "value", {
        /**
         * Returns value.
         *
         * @returns Value.
         */
        get: function () {
            if (this._value === null) {
                return this.getAttributeNS(null, 'value') || '';
            }
            return this._value;
        },
        /**
         * Sets value.
         *
         * @param value Value.
         */
        set: function (value) {
            var oldValue = this._value;
            this._value = value;
            if (oldValue !== this._value) {
                this._selectionStart = this._value.length;
                this._selectionEnd = this._value.length;
                this._selectionDirection = HTMLInputElementSelectionDirectionEnum_1.default.none;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "selectionStart", {
        /**
         * Returns selection start.
         *
         * @returns Selection start.
         */
        get: function () {
            if (this._selectionStart === null) {
                return this.value.length;
            }
            return this._selectionStart;
        },
        /**
         * Sets selection start.
         *
         * @param start Start.
         */
        set: function (start) {
            this.setSelectionRange(start, Math.max(start, this.selectionEnd), this._selectionDirection);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "selectionEnd", {
        /**
         * Returns selection end.
         *
         * @returns Selection end.
         */
        get: function () {
            if (this._selectionEnd === null) {
                return this.value.length;
            }
            return this._selectionEnd;
        },
        /**
         * Sets selection end.
         *
         * @param end End.
         */
        set: function (end) {
            this.setSelectionRange(this.selectionStart, end, this._selectionDirection);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "selectionDirection", {
        /**
         * Returns selection direction.
         *
         * @returns Selection direction.
         */
        get: function () {
            return this._selectionDirection;
        },
        /**
         * Sets selection direction.
         *
         * @param direction Direction.
         */
        set: function (direction) {
            this.setSelectionRange(this._selectionStart, this._selectionEnd, direction);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "form", {
        /**
         * Returns the parent form element.
         *
         * @returns Form.
         */
        get: function () {
            var parent = this.parentNode;
            while (parent && parent.tagName !== 'FORM') {
                parent = this.parentNode;
            }
            return parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, "textLength", {
        /**
         * Returns text length.
         *
         * @param Text Length.
         */
        get: function () {
            return this.value.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set selection range.
     *
     * @param start Start.
     * @param end End.
     * @param [direction="none"] Direction.
     */
    HTMLTextAreaElement.prototype.setSelectionRange = function (start, end, direction) {
        if (direction === void 0) { direction = 'none'; }
        this._selectionEnd = Math.min(end, this.value.length);
        this._selectionStart = Math.min(start, this._selectionEnd);
        this._selectionDirection =
            direction === HTMLInputElementSelectionDirectionEnum_1.default.forward ||
                direction === HTMLInputElementSelectionDirectionEnum_1.default.backward
                ? direction
                : HTMLInputElementSelectionDirectionEnum_1.default.none;
        this.dispatchEvent(new Event_1.default('select', { bubbles: true, cancelable: true }));
    };
    /**
     * Set range text.
     *
     * @param replacement Replacement.
     * @param [start] Start.
     * @param [end] End.
     * @param [direction] Direction.
     * @param selectionMode
     */
    HTMLTextAreaElement.prototype.setRangeText = function (replacement, start, end, selectionMode) {
        if (start === void 0) { start = null; }
        if (end === void 0) { end = null; }
        if (selectionMode === void 0) { selectionMode = HTMLInputElementSelectionModeEnum_1.default.preserve; }
        if (start === null) {
            start = this._selectionStart;
        }
        if (end === null) {
            end = this._selectionEnd;
        }
        if (start > end) {
            throw new DOMException_1.default('The index is not in the allowed range.', DOMExceptionNameEnum_1.default.invalidStateError);
        }
        start = Math.min(start, this.value.length);
        end = Math.min(end, this.value.length);
        var val = this.value;
        var selectionStart = this._selectionStart;
        var selectionEnd = this._selectionEnd;
        this.value = val.slice(0, start) + replacement + val.slice(end);
        var newEnd = start + this.value.length;
        switch (selectionMode) {
            case HTMLInputElementSelectionModeEnum_1.default.select:
                this.setSelectionRange(start, newEnd);
                break;
            case HTMLInputElementSelectionModeEnum_1.default.start:
                this.setSelectionRange(start, start);
                break;
            case HTMLInputElementSelectionModeEnum_1.default.end:
                this.setSelectionRange(newEnd, newEnd);
                break;
            default:
                var delta = replacement.length - (end - start);
                if (selectionStart > end) {
                    selectionStart += delta;
                }
                else if (selectionStart > start) {
                    selectionStart = start;
                }
                if (selectionEnd > end) {
                    selectionEnd += delta;
                }
                else if (selectionEnd > start) {
                    selectionEnd = newEnd;
                }
                this.setSelectionRange(selectionStart, selectionEnd);
                break;
        }
    };
    /**
     * Checks validity.
     *
     * @returns "true" if validation does'nt fail.
     */
    HTMLTextAreaElement.prototype.checkValidity = function () {
        return true;
    };
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    HTMLTextAreaElement.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        var clone = _super.prototype.cloneNode.call(this, deep);
        clone._value = this._value;
        clone._selectionStart = this._selectionStart;
        clone._selectionEnd = this._selectionEnd;
        clone._selectionDirection = this._selectionDirection;
        clone.defaultValue = this.defaultValue;
        return clone;
    };
    return HTMLTextAreaElement;
}(HTMLElement_1.default));
exports.default = HTMLTextAreaElement;
//# sourceMappingURL=HTMLTextAreaElement.js.map