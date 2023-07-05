const express = require("express");
const { userRouter } = require("./routes/user.router");
const cors = require("cors");
const { db } = require("./config/db");
const app = express();
app.use(express.json());
app.use(cors());
db();
app.use("/api/user", userRouter);

app.listen(9001, () => {
  console.log("Listening on port 9001");
});
