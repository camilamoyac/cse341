const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "My API",
        description: "Temple API",
    },
    host: "localhost:8080",
    schemes: ["http"],
}

const outputFile = "./swagger.json";
const endpointFiles = ["./index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointFiles, doc);