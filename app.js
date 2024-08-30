// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send(`測試頁面`);
// });

// app.listen(port, () => {
//   console.log(`1st express server on http://localhost:${port}`);
// });


const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const password_generator = require('./main')

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.static("public"));
// app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render("index");
});

// app.post('/', (req, res) => {
//   const option = req.body;
//   const password = password_generator(option);
//   res.render("index", { password, option });
// });

// app.use(express.urlencoded({ extended: false }));

app.get("/password_generator", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
});