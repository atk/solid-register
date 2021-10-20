"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CSSRule_1 = __importDefault(require("./CSSRule"));
var CSSStyleRule_1 = __importDefault(require("./rules/CSSStyleRule"));
var CSSKeyframeRule_1 = __importDefault(require("./rules/CSSKeyframeRule"));
var CSSKeyframesRule_1 = __importDefault(require("./rules/CSSKeyframesRule"));
var CSSMediaRule_1 = __importDefault(require("./rules/CSSMediaRule"));
var CSSStyleDeclaration_1 = __importDefault(require("./CSSStyleDeclaration"));
var COMMENT_REGEXP = /\/\*[^*]*\*\//gm;
/**
 * CSS parser.
 */
var CSSParser = /** @class */ (function () {
    function CSSParser() {
    }
    /**
     * Parses HTML and returns a root element.
     *
     * @param parentStyleSheet Parent style sheet.
     * @param cssText CSS code.
     * @returns Root element.
     */
    CSSParser.parseFromString = function (parentStyleSheet, cssText) {
        var css = cssText.replace(COMMENT_REGEXP, '');
        var cssRules = [];
        var regExp = /{|}/gm;
        var stack = [];
        var parentRule = null;
        var lastIndex = 0;
        var match;
        while ((match = regExp.exec(css))) {
            if (match[0] === '{') {
                var selectorText = css.substring(lastIndex, match.index).trim();
                if (selectorText.startsWith('@keyframes')) {
                    var newRule = new CSSKeyframesRule_1.default();
                    newRule.name = selectorText.replace('@keyframes ', '');
                    newRule.parentStyleSheet = parentStyleSheet;
                    cssRules.push(newRule);
                    parentRule = newRule;
                }
                else if (selectorText.startsWith('@media')) {
                    var mediums = selectorText.replace('@media', '').split(',');
                    var newRule = new CSSMediaRule_1.default();
                    for (var _i = 0, mediums_1 = mediums; _i < mediums_1.length; _i++) {
                        var medium = mediums_1[_i];
                        newRule.media.appendMedium(medium.trim());
                    }
                    newRule.parentStyleSheet = parentStyleSheet;
                    cssRules.push(newRule);
                    parentRule = newRule;
                }
                else if (parentRule && parentRule.type === CSSRule_1.default.KEYFRAMES_RULE) {
                    var newRule = new CSSKeyframeRule_1.default();
                    newRule.keyText = selectorText.trim();
                    newRule.parentStyleSheet = parentStyleSheet;
                    newRule.parentRule = parentRule;
                    parentRule.cssRules.push(newRule);
                    parentRule = newRule;
                }
                else if (parentRule && parentRule.type === CSSRule_1.default.MEDIA_RULE) {
                    var newRule = new CSSStyleRule_1.default();
                    newRule.selectorText = selectorText;
                    newRule.parentStyleSheet = parentStyleSheet;
                    newRule.parentRule = parentRule;
                    parentRule.cssRules.push(newRule);
                    parentRule = newRule;
                }
                else {
                    var newRule = new CSSStyleRule_1.default();
                    newRule.selectorText = selectorText;
                    newRule.parentStyleSheet = parentStyleSheet;
                    newRule.parentRule = parentRule;
                    if (!parentRule) {
                        cssRules.push(newRule);
                    }
                    parentRule = newRule;
                }
                stack.push(parentRule);
            }
            else {
                if (parentRule) {
                    var cssText_1 = css.substring(lastIndex, match.index).trim();
                    switch (parentRule.type) {
                        case CSSRule_1.default.FONT_FACE_RULE:
                        case CSSRule_1.default.KEYFRAME_RULE:
                        case CSSRule_1.default.STYLE_RULE:
                            var style = new CSSStyleDeclaration_1.default();
                            style.cssText = cssText_1;
                            style.parentRule = parentRule;
                            parentRule.style = style;
                            break;
                    }
                }
                stack.pop();
                parentRule = stack[stack.length - 1] || null;
            }
            lastIndex = match.index + 1;
        }
        return cssRules;
    };
    return CSSParser;
}());
exports.default = CSSParser;
//# sourceMappingURL=CSSParser.js.map