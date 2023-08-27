/**
 * http: Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents
 */
const http = require("http");

const games = [
  {
    id: 1,
    name: "Zrist",
    img: "imgs/zrist-back.jpg",
    url: "https://html5.gamemonetize.com/iyq1x3g396ik7vhf71czo9ubmjrimzd4/",
    createAdt: new Date(),
  },
  {
    id: 2,
    name: "Mini Switcher",
    img: "imgs/miniswitcher-back.jpg",
    url: "https://html5.gamemonetize.com/r822rwum14259b7wacvt1acbp3e4jv4a/",
    createAdt: new Date(),
  },
  {
    id: 3,
    name: "FireBlob",
    img: "imgs/fireblob-back.jpg",
    url: "https://html5.gamemonetize.com/18maefikrn6r5isrep10icvc6lzfrfft/",
    createAdt: new Date(),
  },
];

const json = JSON.stringify(games);

const app = http.createServer((request, response) => {
  /**
   * "Content-Type":
   * The Content-Type representation header is used to indicate the original media type.
   * defines the returned website content for is very important to define the content before of whatever error, then    application/json is the "Content-Type" for return json content.
   */
  response.writeHead(200, { "Content-Type": "application/json" });
  //method singnals that no there are more code in the chucnk
  response.end(json);
});

const PORT = 3000;
app.listen(PORT);
console.log(`Server running on port: ${PORT}`);
