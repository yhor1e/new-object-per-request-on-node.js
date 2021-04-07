const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const rectangles = [];

const server = http.createServer((req, res) => {
  //const rectangle = new Rectangle(100, 100);
  rectangles.push(new Rectangle(100, 100));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
