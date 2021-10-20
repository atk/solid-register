import Window from '../window/Window';
/**
 * Helper class for performing an asynchonous or synchrounous request to a resource.
 */
export default class ResourceFetcher {
    /**
     * Returns resource data asynchonously.
     *
     * @param options Options.
     * @param options.window Location.
     * @param options.url URL.
     * @returns Response.
     */
    static fetch(options: {
        window: Window;
        url: string;
    }): Promise<string>;
    /**
     * Returns resource data synchonously.
     *
     * @param options Options.
     * @param options.window Location.
     * @param options.url URL.
     * @returns Response.
     */
    static fetchSync(options: {
        window: Window;
        url: string;
    }): string;
}
