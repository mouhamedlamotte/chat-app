export const kdebug = (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
        console.debug(...args);
    }
};