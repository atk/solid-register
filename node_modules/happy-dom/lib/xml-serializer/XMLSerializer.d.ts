import INode from '../nodes/node/INode';
/**
 * Utility for converting an element to string.
 *
 * @class QuerySelector
 */
export default class XMLSerializer {
    /**
     * Renders an element as HTML.
     *
     * @param element Element to render.
     * @param root
     * @returns Result.
     */
    serializeToString(root: INode): string;
    /**
     * Returns attributes as a string.
     *
     * @param element Element.
     * @returns Attributes.
     */
    private _getAttributes;
}
