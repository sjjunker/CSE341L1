const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "My Contacts API",
        description: "An API showing my contacts"
    },
    host: "cse341l1.onrender.com",
    schemes: ["https"]
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc);
