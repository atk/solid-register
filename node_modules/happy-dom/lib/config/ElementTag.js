"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HTMLTemplateElement_1 = __importDefault(require("../nodes/html-template-element/HTMLTemplateElement"));
var HTMLFormElement_1 = __importDefault(require("../nodes/html-form-element/HTMLFormElement"));
var HTMLInputElement_1 = __importDefault(require("../nodes/html-input-element/HTMLInputElement"));
var HTMLTextAreaElement_1 = __importDefault(require("../nodes/html-text-area-element/HTMLTextAreaElement"));
var SVGSVGElement_1 = __importDefault(require("../nodes/svg-element/SVGSVGElement"));
var SVGElement_1 = __importDefault(require("../nodes/svg-element/SVGElement"));
var HTMLScriptElement_1 = __importDefault(require("../nodes/html-script-element/HTMLScriptElement"));
var HTMLImageElement_1 = __importDefault(require("../nodes/html-image-element/HTMLImageElement"));
var HTMLLinkElement_1 = __importDefault(require("../nodes/html-link-element/HTMLLinkElement"));
var HTMLStyleElement_1 = __importDefault(require("../nodes/html-style-element/HTMLStyleElement"));
exports.default = {
    template: HTMLTemplateElement_1.default,
    form: HTMLFormElement_1.default,
    input: HTMLInputElement_1.default,
    textarea: HTMLTextAreaElement_1.default,
    script: HTMLScriptElement_1.default,
    img: HTMLImageElement_1.default,
    link: HTMLLinkElement_1.default,
    style: HTMLStyleElement_1.default,
    svg: SVGSVGElement_1.default,
    circle: SVGElement_1.default,
    ellipse: SVGElement_1.default,
    line: SVGElement_1.default,
    path: SVGElement_1.default,
    polygon: SVGElement_1.default,
    polyline: SVGElement_1.default,
    rect: SVGElement_1.default,
    stop: SVGElement_1.default,
    use: SVGElement_1.default
};
//# sourceMappingURL=ElementTag.js.map