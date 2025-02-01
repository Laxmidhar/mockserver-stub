const mockserver = require("mockserver-node");

mockserver.start_mockserver({
    serverPort: 1080, // Port where mock server runs
    verbose: true,
    trace: true
}).then(() => {
    console.log("MockServer started on port 1080");
}).catch((error) => {
    console.error("Failed to start MockServer", error);
});
