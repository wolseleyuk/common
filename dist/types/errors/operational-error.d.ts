export declare class OperationalError extends Error {
    originalError: Error | null;
    context: {};
    constructor(message: string, originalError?: Error | null, context?: {});
}
