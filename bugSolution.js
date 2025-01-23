const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    if (req.url === '/error') {
      // Handle error within the asynchronous operation
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return; //This ensures that the rest of the code isn't executed after error handling.
      //throw new Error('Something went wrong!');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }, 1000);
});

server.on('error', err => {
  console.error('Server Error:', err);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});