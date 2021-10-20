"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataTransferItem_1 = __importDefault(require("./DataTransferItem"));
/**
 *
 */
var DataTransferItemList = /** @class */ (function () {
    function DataTransferItemList() {
        this.DataTransferItem = [];
    }
    /**
     * Adds an item.
     *
     * @param item Item.
     */
    DataTransferItemList.prototype.add = function (item) {
        this.DataTransferItem.push(new DataTransferItem_1.default(item));
    };
    /**
     * Removes an item.
     *
     * @param index Index.
     */
    DataTransferItemList.prototype.remove = function (index) {
        this.DataTransferItem.splice(index, 1);
    };
    /**
     * Clears list.
     */
    DataTransferItemList.prototype.clear = function () {
        this.DataTransferItem = [];
    };
    return DataTransferItemList;
}());
exports.default = DataTransferItemList;
//# sourceMappingURL=DataTransferItemList.js.map