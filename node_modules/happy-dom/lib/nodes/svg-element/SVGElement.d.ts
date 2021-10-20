import Element from '../element/Element';
import ISVGElement from './ISVGElement';
import ISVGSVGElement from './ISVGSVGElement';
/**
 * SVG Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/SVGElement.
 */
export default class SVGElement extends Element implements ISVGElement {
    /**
     * Returns viewport.
     *
     * @returns SVG rect.
     */
    get viewportElement(): ISVGElement;
    /**
     * Returns current translate.
     *
     * @returns Element.
     */
    get ownerSVGElement(): ISVGSVGElement;
    /**
     * Returns data set.
     *
     * @returns Data set.
     */
    get dataset(): {
        [key: string]: string;
    };
}
