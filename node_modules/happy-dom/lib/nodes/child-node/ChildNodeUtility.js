"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var XMLParser_1 = __importDefault(require("../../xml-parser/XMLParser"));
/**
 * Child node utility.
 */
var ChildNodeUtility = /** @class */ (function () {
    function ChildNodeUtility() {
    }
    /**
     * Removes the node from its parent.
     *
     * @param childNode Child node.
     */
    ChildNodeUtility.remove = function (childNode) {
        if (childNode.parentNode) {
            childNode.parentNode.removeChild(childNode);
        }
    };
    /**
     * The Node.replaceWith() method replaces this Node in the children list of its parent with a set of Node or DOMString objects.
     *
     * @param childNode Child node.
     * @param nodes List of Node or DOMString.
     */
    ChildNodeUtility.replaceWith = function (childNode) {
        var nodes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            nodes[_i - 1] = arguments[_i];
        }
        var parent = childNode.parentNode;
        if (!parent) {
            return;
        }
        for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
            var node = nodes_1[_a];
            if (typeof node === 'string') {
                var newChildNodes = XMLParser_1.default.parse(childNode.ownerDocument, node).childNodes.slice();
                for (var _b = 0, newChildNodes_1 = newChildNodes; _b < newChildNodes_1.length; _b++) {
                    var newChildNode = newChildNodes_1[_b];
                    parent.insertBefore(newChildNode, childNode);
                }
            }
            else {
                parent.insertBefore(node, childNode);
            }
        }
        parent.removeChild(childNode);
    };
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just before this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param childNode Child node.
     * @param nodes List of Node or DOMString.
     */
    ChildNodeUtility.before = function (childNode) {
        var nodes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            nodes[_i - 1] = arguments[_i];
        }
        var parent = childNode.parentNode;
        if (!parent) {
            return;
        }
        for (var _a = 0, nodes_2 = nodes; _a < nodes_2.length; _a++) {
            var node = nodes_2[_a];
            if (typeof node === 'string') {
                var newChildNodes = XMLParser_1.default.parse(childNode.ownerDocument, node).childNodes.slice();
                for (var _b = 0, newChildNodes_2 = newChildNodes; _b < newChildNodes_2.length; _b++) {
                    var newChildNode = newChildNodes_2[_b];
                    parent.insertBefore(newChildNode, childNode);
                }
            }
            else {
                parent.insertBefore(node, childNode);
            }
        }
    };
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just after this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param childNode Child node.
     * @param nodes List of Node or DOMString.
     */
    ChildNodeUtility.after = function (childNode) {
        var nodes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            nodes[_i - 1] = arguments[_i];
        }
        var parent = childNode.parentNode;
        if (!parent) {
            return;
        }
        var nextSibling = childNode.nextSibling;
        for (var _a = 0, nodes_3 = nodes; _a < nodes_3.length; _a++) {
            var node = nodes_3[_a];
            if (typeof node === 'string') {
                var newChildNodes = XMLParser_1.default.parse(childNode.ownerDocument, node).childNodes.slice();
                for (var _b = 0, newChildNodes_3 = newChildNodes; _b < newChildNodes_3.length; _b++) {
                    var newChildNode = newChildNodes_3[_b];
                    if (!nextSibling) {
                        parent.appendChild(newChildNode);
                    }
                    else {
                        parent.insertBefore(newChildNode, nextSibling);
                    }
                }
            }
            else if (!nextSibling) {
                parent.appendChild(node);
            }
            else {
                parent.insertBefore(node, nextSibling);
            }
        }
    };
    return ChildNodeUtility;
}());
exports.default = ChildNodeUtility;
//# sourceMappingURL=ChildNodeUtility.js.map