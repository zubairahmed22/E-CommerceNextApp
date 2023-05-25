const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const cors = require('micro-cors')();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === '/api/https://e-commerce-next-ap-p.vercel.app') {
      // Enable CORS for this specific endpoint
      cors(req, res);
    }

    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});