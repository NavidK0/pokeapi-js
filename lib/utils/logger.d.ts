/**
 * Logger utility that wraps console methods and conditionally logs based on environment variable.
 */
export declare const logger: {
    /**
     * Wrapper for console.log() that only logs if debugging is enabled.
     * @param args
     */
    log: (message?: any, ...optionalParams: any[]) => void;
    /**
     * Wrapper for console.info() that only logs if debugging is enabled.
     * @param args
     */
    info: (message?: any, ...optionalParams: any[]) => void;
    /**
     * Wrapper for console.warn() that only logs if debugging is enabled.
     * @param args
     */
    warn: (message?: any, ...optionalParams: any[]) => void;
    /**
     * Wrapper for console.error(). Always logs errors regardless of debugging state.
     * @param args
     */
    error: (message?: any, ...optionalParams: any[]) => void;
    dir: {
        (item?: any, options?: any): void;
        (obj: any, options?: import("util").InspectOptions): void;
    };
    time: {
        (label?: string): void;
        (label?: string): void;
    };
    timeEnd: {
        (label?: string): void;
        (label?: string): void;
    };
    trace: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    table: {
        (tabularData?: any, properties?: string[]): void;
        (tabularData: any, properties?: readonly string[]): void;
    };
    group: {
        (...data: any[]): void;
        (...label: any[]): void;
    };
    groupEnd: {
        (): void;
        (): void;
    };
    clear: {
        (): void;
        (): void;
    };
};
