const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Contacts API',
    description: 'An API showing my contacts'
  },
  host: 'https://cse341l1.onrender.com'
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointFiles, doc);