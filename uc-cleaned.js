window.onerror = function(message, source, lineno, colno, error) {
    if (message.includes("404")) {
        return true; // Suppress 404 errors
    }
    console.error(message, source, lineno, colno, error); // Log other errors
};
