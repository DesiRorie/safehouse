const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

app.get("/accounts", (req, res) => {
  res.json({ users: ["user1", "user2", "user3", "user4"] });
});

app.listen(3000, () => {
  console.log("server started");
});
