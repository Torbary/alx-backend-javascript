const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send "Hello Holberton School!" as the response
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245
app.listen(1245);

module.exports = app;
