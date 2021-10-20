import Element from '../nodes/element/Element';
/**
 *
 */
export default class SelectorItem {
    isAll: boolean;
    isID: boolean;
    isAttribute: boolean;
    isPseudo: boolean;
    isClass: boolean;
    isTagName: boolean;
    private tagName;
    private selector;
    private id;
    /**
     * Constructor.
     *
     * @param selector Selector.
     */
    constructor(selector: string);
    /**
     * Matches a selector against an element.
     *
     * @param element HTML element.
     * @returns TRUE if matching.
     */
    match(element: Element): boolean;
    /**
     * Matches a nth-child selector.
     *
     * @param element Element.
     * @param psuedo Psuedo name.
     * @param place Place.
     * @returns True if it is a match.
     */
    private matchesNthChild;
    /**
     * Matches a psuedo selector.
     *
     * @param element Element.
     * @param psuedo Psuedo name.
     * @returns True if it is a match.
     */
    private matchesPsuedo;
    /**
     * Matches attribute name only.
     *
     * @param element Element.
     * @param attributeName Attribute name.
     * @returns True if it is a match.
     */
    private matchesAttributeName;
    /**
     *
     * Matches attribute name and value.
     *
     * @param element Element.
     * @param attributeName Attribute name.
     * @param attributeValue Attribute value.
     * @param [matchType] Match type.
     * @returns True if it is a match.
     */
    private matchesAttributeNameAndValue;
}
