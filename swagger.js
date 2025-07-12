/* eslint-disable no-undef */
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "API documentation for the Contacts application",
  },
  host: "localhost:https://cse341-project1-tj.onrender.com",
  schemes: ["http"],
  tags: [
    {
      name: "Contacts",
      description: "Operations related to contacts",
    },
    {
      name: "Home",
      description: "Home page operations",
    },
  ],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);

// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//     await import('./app.js');
// });
