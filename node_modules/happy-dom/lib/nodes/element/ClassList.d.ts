import Element from './Element';
/**
 * Class list.
 */
export default class ClassList {
    private _ownerElement;
    /**
     * Adds class names.
     *
     * @param ownerElement Owner element.
     */
    constructor(ownerElement: Element);
    /**
     * Adds class names.
     *
     * @param classNames Class names.
     */
    add(...classNames: string[]): void;
    /**
     * Adds class names.
     *
     * @param classNames Class names.
     */
    remove(...classNames: string[]): void;
    /**
     * Check if the list contains a class.
     *
     * @param className Class name.
     * @returns TRUE if it contains.
     */
    contains(className: string): boolean;
}
