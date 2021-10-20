import DocumentFragment from '../document-fragment/DocumentFragment';
import IElement from '../element/IElement';
import CSSStyleSheet from '../../css/CSSStyleSheet';
import IShadowRoot from './IShadowRoot';
/**
 * ShadowRoot.
 */
export default class ShadowRoot extends DocumentFragment implements IShadowRoot {
    readonly mode = "open";
    readonly host: IElement;
    adoptedStyleSheets: CSSStyleSheet[];
    /**
     * Returns inner HTML.
     *
     * @returns HTML.
     */
    get innerHTML(): string;
    /**
     * Sets inner HTML.
     *
     * @param html HTML.
     */
    set innerHTML(html: string);
    /**
     * Converts to string.
     *
     * @returns String.
     */
    toString(): string;
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep?: boolean): IShadowRoot;
}
