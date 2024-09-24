import express from "express";

// import body parser
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

const users = [];

// using express.static function to load static files such as css and images.
app.use(express.static("public"));

// using body parser middleware to read data coming with request
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// custom middlware
// app.use((req, res, next) => {
//   console.log(req.url);
//   next();
// });

// routes
app.route("/").get((req, res) => {
  //   res.send("Home Page");
  // res.sendFile(process.cwd() + "/pages/index.html");
  res.render("index", {
    title: "Node App : Home",
    allUsers: users,
  });
});

app.route("/about").get((req, res) => {
  // res.send("About Page");
  // res.sendFile(process.cwd() + "/pages/about.html");
  res.render("about", {
    title: "Node App : About",
  });
});
app
  .route("/contact")
  .get((req, res) => {
    // res.send("Contact Page");
    // res.sendFile(process.cwd() + "/pages/contact.html");
    res.render("contact", {
      title: "Node App : Contact Us",
    });
  })
  .post((req, res) => {
    users.push(req.body);
    console.log(users);
  });

// server setup
app.listen(PORT, () => {
  console.log("server started on port ", PORT);
});
