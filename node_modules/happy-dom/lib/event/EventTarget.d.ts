import IEventListener from './IEventListener';
import Event from './Event';
import IEventTarget from './IEventTarget';
/**
 * Handles events.
 */
export default abstract class EventTarget implements IEventTarget {
    readonly _listeners: {
        [k: string]: (((event: Event) => void) | IEventListener)[];
    };
    /**
     * Adds an event listener.
     *
     * @param type Event type.
     * @param listener Listener.
     */
    addEventListener(type: string, listener: ((event: Event) => void) | IEventListener): void;
    /**
     * Adds an event listener.
     *
     * @param type Event type.
     * @param listener Listener.
     */
    removeEventListener(type: string, listener: ((event: Event) => void) | IEventListener): void;
    /**
     * Dispatches an event.
     *
     * @param event Event.
     * @returns The return value is false if event is cancelable and at least one of the event handlers which handled this event called Event.preventDefault().
     */
    dispatchEvent(event: Event): boolean;
}
