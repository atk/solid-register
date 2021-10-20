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
var Node_1 = __importDefault(require("../node/Node"));
/**
 * DocumentType.
 */
var DocumentType = /** @class */ (function (_super) {
    __extends(DocumentType, _super);
    function DocumentType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeType = Node_1.default.DOCUMENT_TYPE_NODE;
        _this.name = null;
        _this.publicId = '';
        _this.systemId = '';
        return _this;
    }
    Object.defineProperty(DocumentType.prototype, "nodeName", {
        /**
         * Node name.
         *
         * @returns Node name.
         */
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Converts to string.
     *
     * @returns String.
     */
    DocumentType.prototype.toString = function () {
        return '[object DocumentType]';
    };
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    DocumentType.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        var clone = _super.prototype.cloneNode.call(this, deep);
        clone.name = this.name;
        clone.publicId = this.publicId;
        clone.systemId = this.systemId;
        return clone;
    };
    return DocumentType;
}(Node_1.default));
exports.default = DocumentType;
//# sourceMappingURL=DocumentType.js.map