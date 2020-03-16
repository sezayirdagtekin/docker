
const app = require('express')();

app.get("/", (req, res) => {
  res.send("Hello there!!!");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
