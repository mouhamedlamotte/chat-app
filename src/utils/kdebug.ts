

/**
 * Logs messages to the console if the environment is set to development.
 * @param {...any[]} args - The messages to log.
 */

export const kdebug = (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(...args);
    }
};