window.onerror = function(message, source, lineno, colno, error) {
    if (message.includes("404")) {
        console.error("404 Error: ", message, " at ", source, ":", lineno, ":", colno);
        return true; // Suppress 404 errors
    }
    console.error(message, source, lineno, colno, error); // Log other errors
};
