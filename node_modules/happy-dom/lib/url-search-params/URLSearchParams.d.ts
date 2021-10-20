/**
 * URLSearchParams.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams.
 */
export default class URLSearchParams {
    private _params;
    /**
     * Constructor.
     *
     * @param [params] Params string.
     */
    constructor(params?: string);
    /**
     * Appends a specified key/value pair as a new search parameter.
     *
     * @param name Name.
     * @param value Value.
     */
    append(name: string, value: string): void;
    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     *
     * @param name Name.
     */
    delete(name: string): void;
    /**
     * Returns an iterator.
     *
     * @returns Entries.
     */
    entries(): IterableIterator<[string, string]>;
    /**
     * For each.
     *
     * @param callback Callback.
     */
    forEach(callback: (value: any, key: any) => void): void;
    /**
     * Returns value.
     *
     * @param name Name.
     */
    get(name: string): string;
    /**
     * Returns all values associated with a name.
     *
     * @param name Name.
     * @returns Values.
     */
    getAll(name: string): string[];
    /**
     * Returns "true" if param exists.
     *
     * @param name Name.
     * @returns "true" if param exists.
     */
    has(name: string): boolean;
    /**
     * Returns an iterator.
     *
     * @returns Keys iterator.
     */
    keys(): IterableIterator<string>;
    /**
     * Sets the value associated with a given search parameter to the given value. If there are several values, the others are deleted.
     *
     * @param name Name.
     * @param value Value.
     */
    set(name: string, value: string): void;
    /**
     * Sorts all key/value pairs, if any, by their keys.
     */
    sort(): void;
    /**
     * Returns a string containing a query string suitable for use in a URL.
     */
    toString(): string;
    /**
     * Returns an iterator.
     *
     * @returns Values iterator.
     */
    values(): IterableIterator<string>;
}
