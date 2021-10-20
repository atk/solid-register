"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
var NodeListFactory = /** @class */ (function () {
    function NodeListFactory() {
    }
    /**
     * Creates a NodeList.
     *
     * @param nodes Nodes.
     * @returns NodeList.
     */
    NodeListFactory.create = function (nodes) {
        nodes = nodes ? nodes.slice() : [];
        Object.defineProperty(nodes, 'item', {
            value: this.getItem.bind(null, nodes)
        });
        return nodes;
    };
    /**
     * Returns node by index.
     *
     * @param nodes
     * @param index Index.
     */
    NodeListFactory.getItem = function (nodes, index) {
        return nodes[index] || null;
    };
    return NodeListFactory;
}());
exports.default = NodeListFactory;
//# sourceMappingURL=NodeListFactory.js.map