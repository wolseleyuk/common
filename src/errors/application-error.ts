export class ApplicationError extends Error {

    public data;

    constructor(message: string, data = {}) {
        super(message);

        this.name = 'ApplicationError';

        this.data = data; // Optional: carry extra context or details for the UI
        // Ensure stack trace is captured (useful for debugging)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApplicationError);
        }
    }
}