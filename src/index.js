const nodemon = require("nodemon");

/**
 * express: Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to:
 */
const express = require("express"),
  app = express();

//With this express can use the request.body
app.use(express.json());

const games = [
  {
    id: 1,
    name: "Zrist",
    img: "imgs/zrist-back.jpg",
    url: "https://html5.gamemonetize.com/iyq1x3g396ik7vhf71czo9ubmjrimzd4/",
    createAdt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Mini Switcher",
    img: "imgs/miniswitcher-back.jpg",
    url: "https://html5.gamemonetize.com/r822rwum14259b7wacvt1acbp3e4jv4a/",
    createAdt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "FireBlob",
    img: "imgs/fireblob-back.jpg",
    url: "https://html5.gamemonetize.com/18maefikrn6r5isrep10icvc6lzfrfft/",
    createAdt: new Date().toISOString(),
  },
];

//app.get => when the server does a reques of type GET
app.get("/", (request, response) => {
  response.send(`<h1>Hello world</h1>`);
});

app.get("/api/games", (request, response) => {
  response.json(games);
});

app.get("/api/games/:id", (request, response) => {
  const id = Number(request.params.id);
  const game = games.find((el) => el.id === id);

  if (!game) response.status(404).end();
  response.json(game);
});

app.post("/api/games", (request, response) => {
  const game = {
    id: games.length + 1,
    name: request.body.name,
    img: request.body.img,
    url: request.body.url,
    createAdt: new Date().toISOString(),
  };

  if (!game || !request.body)
    response.status(400).json({
      error: "game.body is missing",
    });

  games = [...games, game];
  response.send(game);
});

app.delete("/api/games/:id", (request, response) => {
  const id = Number(request.params.id);
  const game = games.filter((el) => el.id !== id);
  response.json(game);
  response.status(204).end();
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
