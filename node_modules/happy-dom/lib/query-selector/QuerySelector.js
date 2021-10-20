"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = __importDefault(require("../nodes/node/Node"));
var SelectorItem_1 = __importDefault(require("./SelectorItem"));
var NodeListFactory_1 = __importDefault(require("../nodes/node/NodeListFactory"));
var SELECTOR_PART_REGEXP = /(\[[^\]]+\]|[a-zA-Z0-9-_.#"*:()\]]+)|([ ,>]+)/g;
// The above one seem to work fine and is faster, but this one can be useful if more rules need to be added as it is more "correct".
// Const SELECTOR_PART_REGEXP = /([a-zA-Z0-9-$.]+|\[[a-zA-Z0-9-]+\]|\[[a-zA-Z0-9$-~|^$*]+[ ]*=[ ]*"[^"]+"\])|([ ,]+)/g;
/**
 * Utility for query selection in an HTML element.
 *
 * @class QuerySelector
 */
var QuerySelector = /** @class */ (function () {
    function QuerySelector() {
    }
    /**
     * Finds elements based on a query selector.
     *
     * @param node Node to search in.
     * @param selector Selector.
     * @returns HTML elements.
     */
    QuerySelector.querySelectorAll = function (node, selector) {
        var matches = NodeListFactory_1.default.create();
        for (var _i = 0, _a = this.getSelectorParts(selector); _i < _a.length; _i++) {
            var parts = _a[_i];
            for (var _b = 0, _c = this.findAll(node, [node], parts); _b < _c.length; _b++) {
                var element = _c[_b];
                if (!matches.includes(element)) {
                    matches.push(element);
                }
            }
        }
        return matches;
    };
    /**
     * Finds an element based on a query selector.
     *
     * @param node Node to search in.
     * @param selector Selector.
     * @returns HTML element.
     */
    QuerySelector.querySelector = function (node, selector) {
        for (var _i = 0, _a = this.getSelectorParts(selector); _i < _a.length; _i++) {
            var parts = _a[_i];
            var match = this.findFirst(node, [node], parts);
            if (match) {
                return match;
            }
        }
        return null;
    };
    /**
     * Finds elements based on a query selector for a part of a list of selectors separated with comma.
     *
     * @param rootNode Root node.
     * @param nodes Nodes.
     * @param selectorParts Selector parts.
     * @param [selectorItem] Selector item.
     * @returns HTML elements.
     */
    QuerySelector.findAll = function (rootNode, nodes, selectorParts, selectorItem) {
        var isDirectChild = selectorParts[0] === '>';
        if (isDirectChild) {
            selectorParts = selectorParts.slice(1);
        }
        var selector = selectorItem || new SelectorItem_1.default(selectorParts[0]);
        var matched = [];
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            if (node.nodeType === Node_1.default.ELEMENT_NODE) {
                if (selector.match(node)) {
                    if (selectorParts.length === 1) {
                        if (rootNode !== node) {
                            matched.push(node);
                        }
                    }
                    else {
                        matched = matched.concat(this.findAll(rootNode, node.children, selectorParts.slice(1), null));
                    }
                }
            }
            if (!isDirectChild && node['children']) {
                matched = matched.concat(this.findAll(rootNode, node['children'], selectorParts, selector));
            }
        }
        return matched;
    };
    /**
     * Finds an element based on a query selector for a part of a list of selectors separated with comma.
     *
     * @param rootNode
     * @param nodes Nodes.
     * @param selector Selector.
     * @param selectorParts
     * @param [selectorItem] Selector item.
     * @returns HTML element.
     */
    QuerySelector.findFirst = function (rootNode, nodes, selectorParts, selectorItem) {
        var isDirectChild = selectorParts[0] === '>';
        if (isDirectChild) {
            selectorParts = selectorParts.slice(1);
        }
        var selector = selectorItem || new SelectorItem_1.default(selectorParts[0]);
        for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
            var node = nodes_2[_i];
            if (node.nodeType === Node_1.default.ELEMENT_NODE && selector.match(node)) {
                if (selectorParts.length === 1) {
                    if (rootNode !== node) {
                        return node;
                    }
                }
                else {
                    var childSelector = this.findFirst(rootNode, node.children, selectorParts.slice(1), null);
                    if (childSelector) {
                        return childSelector;
                    }
                }
            }
            if (!isDirectChild && node['children']) {
                var childSelector = this.findFirst(rootNode, node['children'], selectorParts, selector);
                if (childSelector) {
                    return childSelector;
                }
            }
        }
        return null;
    };
    /**
     * Splits a selector string into groups and parts.
     *
     * @param selector Selector.
     * @returns HTML element.
     */
    QuerySelector.getSelectorParts = function (selector) {
        if (selector === '*' || (!selector.includes(',') && !selector.includes(' '))) {
            return [[selector]];
        }
        var regexp = new RegExp(SELECTOR_PART_REGEXP);
        var groups = [];
        var currentSelector = '';
        var parts = [];
        var match;
        while ((match = regexp.exec(selector))) {
            if (match[2]) {
                var trimmed = match[2].trim();
                parts.push(currentSelector);
                currentSelector = '';
                if (trimmed === ',') {
                    groups.push(parts);
                    parts = [];
                }
                else if (trimmed === '>') {
                    parts.push('>');
                }
            }
            else if (match[1]) {
                currentSelector += match[1];
            }
        }
        if (currentSelector !== '') {
            parts.push(currentSelector);
        }
        if (parts.length > 0) {
            groups.push(parts);
        }
        return groups;
    };
    return QuerySelector;
}());
exports.default = QuerySelector;
//# sourceMappingURL=QuerySelector.js.map