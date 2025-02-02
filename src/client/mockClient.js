const mockServerClient = require("mockserver-client").mockServerClient;

mockServerClient("mockserver-stub-git", 1080)
    .mockAnyResponse({
        httpRequest: {
            method: "GET",
            path: "/api/users"
        },
        httpResponse: {
            statusCode: 200,
            body: JSON.stringify({ users: [{ id: 1, name: "John Doe" }] }),
            headers: { 
                    "name": "Content-Type", value: "application/json",
                "Content-Type": "application/json"}
        }
    })
    .then(() => console.log("Mock API set up"))
    .catch((error) => console.error("Error setting up mock", error));
