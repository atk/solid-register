/// <reference types="node" />
import AsyncTaskTypeEnum from './AsyncTaskTypeEnum';
/**
 * Handles async tasks.
 */
export default class AsyncTaskManager {
    private tasks;
    private queue;
    /**
     * Returns a promise that is fulfilled when async tasks are complete.
     * This method is not part of the HTML standard.
     *
     * @returns Promise.
     */
    whenComplete(): Promise<void>;
    /**
     * Cancels all tasks.
     *
     * @param [error] Error.
     */
    cancelAllTasks(error?: Error): void;
    /**
     * Starts a timer.
     *
     * @param id Timer ID.
     */
    startTimer(id?: NodeJS.Timeout): void;
    /**
     * Ends a timer.
     *
     * @param id Timer ID.
     */
    endTimer(id?: NodeJS.Timeout): void;
    /**
     * Starts an async task.
     *
     * @param type Task type.
     */
    startTask(type: AsyncTaskTypeEnum): void;
    /**
     * Ends an async task.
     *
     * @param type Task type.
     * @param [error] Error.
     */
    endTask(type: AsyncTaskTypeEnum, error?: Error): void;
    /**
     * Returns the amount of running tasks by type.
     *
     * @param type Task type.
     * @returns Count.
     */
    getRunningCount(type: AsyncTaskTypeEnum): number;
}
