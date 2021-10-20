"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DocumentFragment_1 = __importDefault(require("../document-fragment/DocumentFragment"));
var DOMRect_1 = __importDefault(require("./DOMRect"));
/**
 * Range object.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Range
 */
var Range = /** @class */ (function () {
    function Range() {
        this._startContainer = null;
        this._endContainer = null;
        this._startOffset = -1;
        this._endOffset = -1;
        this._collapsed = false;
    }
    Object.defineProperty(Range.prototype, "collapsed", {
        /**
         * Returns collapsed.
         *
         * @returns "true" if collapsed.
         */
        get: function () {
            return this._collapsed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "commonAncestorContainer", {
        /**
         * Returns common ancestor container.
         *
         * @returns Node.
         */
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "endContainer", {
        /**
         * Returns end container.
         *
         * @returns Node.
         */
        get: function () {
            return this._endContainer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "startContainer", {
        /**
         * Returns start container.
         *
         * @returns Node.
         */
        get: function () {
            return this._startContainer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "endOffset", {
        /**
         * Returns end offset.
         *
         * @returns Offset.
         */
        get: function () {
            return this._endOffset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "startOffset", {
        /**
         * Returns start offset.
         *
         * @returns Offset.
         */
        get: function () {
            return this._startOffset;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets start.
     *
     * @param startNode Start node.
     * @param startOffset Start offset.
     */
    Range.prototype.setStart = function (startNode, startOffset) {
        this._startContainer = startNode;
        this._startOffset = startOffset;
    };
    /**
     * Sets end.
     *
     * @param endNode End node.
     * @param endOffset End offset.
     */
    Range.prototype.setEnd = function (endNode, endOffset) {
        this._endContainer = endNode;
        this._endOffset = endOffset;
    };
    /**
     * Sets start before.
     */
    Range.prototype.setStartBefore = function () { };
    /**
     * Sets start after.
     */
    Range.prototype.setStartAfter = function () { };
    /**
     * Sets end before.
     */
    Range.prototype.setEndBefore = function () { };
    /**
     * Sets end after.
     */
    Range.prototype.setEndAfter = function () { };
    /**
     * Selects a node.
     */
    Range.prototype.selectNode = function () { };
    /**
     * Selects node content.
     */
    Range.prototype.selectNodeContents = function () { };
    /**
     * Collapses the Range to one of its boundary points.
     */
    Range.prototype.collapse = function () {
        this._collapsed = true;
    };
    /**
     * Removes the contents of a Range from the Document.
     */
    Range.prototype.deleteContents = function () { };
    /**
     * Moves contents of a Range from the document tree into a DocumentFragment.
     */
    Range.prototype.extractContents = function () {
        return new DocumentFragment_1.default();
    };
    /**
     * Insert a Node at the start of a Range.
     */
    Range.prototype.insertNode = function () { };
    /**
     * Moves content of a Range into a new Node.
     */
    Range.prototype.surroundContents = function () { };
    /**
     * Compares the boundary points of the Range with another Range.
     *
     * @returns "true" when equal.
     */
    Range.prototype.compareBoundaryPoints = function () {
        return false;
    };
    /**
     * Clones the range.
     *
     * @returns Range.
     */
    Range.prototype.cloneRange = function () {
        return new Range();
    };
    /**
     * Releases the Range from use to improve performance.
     */
    Range.prototype.detach = function () { };
    /**
     * Returns the text of the Range.
     *
     * @returns Text.
     */
    Range.prototype.toString = function () {
        return '';
    };
    /**
     * Returns -1, 0, or 1 indicating whether the point occurs before, inside, or after the Range.
     *
     * @returns Number.
     */
    Range.prototype.comparePoint = function () {
        return 0;
    };
    /**
     * Returns a DocumentFragment created from a given string of code.
     *
     * @returns Document fragment.
     */
    Range.prototype.createContextualFragment = function () {
        return new DocumentFragment_1.default();
    };
    /**
     * Returns a DOMRect object which bounds the entire contents of the Range; this would be the union of all the rectangles returned by range.getClientRects().
     *
     * @returns DOM rect.
     */
    Range.prototype.getBoundingClientRect = function () {
        return new DOMRect_1.default();
    };
    /**
     * Returns a list of DOMRect objects that aggregates the results of Element.getClientRects() for all the elements in the Range.
     *
     * @returns DOM rect.
     */
    Range.prototype.getClientRects = function () {
        return new DOMRect_1.default();
    };
    /**
     * Returns a boolean indicating whether the given node intersects the Range.
     *
     * @returns "true" when intersecting.
     */
    Range.prototype.intersectsNode = function () {
        return false;
    };
    /**
     * Returns a boolean indicating whether the given point is in the Range.
     *
     * @returns "true" when in range.
     */
    Range.prototype.isPointInRange = function () {
        return false;
    };
    return Range;
}());
exports.default = Range;
//# sourceMappingURL=Range.js.map