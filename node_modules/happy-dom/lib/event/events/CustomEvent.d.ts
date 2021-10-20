import Event from '../Event';
import ICustomEventInit from './ICustomEventInit';
/**
 *
 */
export default class CustomEvent extends Event {
    detail: object;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type: string, eventInit?: ICustomEventInit);
}
