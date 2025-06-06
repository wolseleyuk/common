export class OperationalError extends Error {

        public originalError: Error | null;
        public context;

        constructor(message: string, originalError: Error | null = null, context = {}) {
            // Append original error message if available, for clearer logs
            const fullMessage = originalError ? `${message} | Original: ${originalError.message}` : message;

            super(fullMessage);

            this.name = 'OperationalError';
            this.originalError = originalError; // Keep the original error for detailed logging
            this.context = context; // Optional: Add context about where the error occurred

            // Ensure stack trace is captured
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, OperationalError);
            }
        }
    }