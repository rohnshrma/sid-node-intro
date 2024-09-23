import http from "http";
const PORT = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("HomePage");
  } else if (req.url === "/about" && req.method === "GET") {
    res.statusCode = 200;
    res.end("AboutPage");
  }

  res.statusCode = 404;
  res.end("Page Not Found");
});

server.listen(PORT, host, () => {
  console.log("server started on port", PORT);
});
