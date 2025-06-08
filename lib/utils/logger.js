"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const isTest = process.env.NODE_ENV === "test";
const isEnabled = process.env.POKEAPI_DEBUG_LOGS === "true" || isTest;
/**
 * Logger utility that wraps console methods and conditionally logs based on environment variable.
 */
exports.logger = {
    /**
     * Wrapper for console.log() that only logs if debugging is enabled.
     * @param args
     */
    log: (...args) => {
        if (isEnabled)
            console.log(...args);
    },
    /**
     * Wrapper for console.info() that only logs if debugging is enabled.
     * @param args
     */
    info: (...args) => {
        if (isEnabled)
            console.info(...args);
    },
    /**
     * Wrapper for console.warn() that only logs if debugging is enabled.
     * @param args
     */
    warn: (...args) => {
        if (isEnabled)
            console.warn(...args);
    },
    /**
     * Wrapper for console.error(). Always logs errors regardless of debugging state.
     * @param args
     */
    error: (...args) => {
        console.error(...args);
    },
    // Pass through for other console functions
    dir: console.dir.bind(console),
    time: console.time.bind(console),
    timeEnd: console.timeEnd.bind(console),
    trace: console.trace.bind(console),
    table: console.table.bind(console),
    group: console.group.bind(console),
    groupEnd: console.groupEnd.bind(console),
    clear: console.clear.bind(console),
};
