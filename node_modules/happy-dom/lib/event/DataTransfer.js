"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataTransferItemList_1 = __importDefault(require("./DataTransferItemList"));
/**
 *
 */
var DataTransfer = /** @class */ (function () {
    function DataTransfer() {
        this.dropEffect = 'none';
        this.effectAllowed = 'none';
        this.files = [];
        this.items = new DataTransferItemList_1.default();
        this.types = [];
    }
    return DataTransfer;
}());
exports.default = DataTransfer;
//# sourceMappingURL=DataTransfer.js.map