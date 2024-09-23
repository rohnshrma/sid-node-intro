import express from "express";
const app = express();
const PORT = 4000;

// routes
app.route("/").get((req, res) => {
  //   res.send("Home Page");
  res.sendFile(process.cwd() + "/pages/index.html");
});

app.route("/about").get((req, res) => {
  res.send("About Page");
});
app.route("/contact").get((req, res) => {
  res.send("Contact Page");
});

// server setup
app.listen(PORT, () => {
  console.log("server started on port ", PORT);
});
