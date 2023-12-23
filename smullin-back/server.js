const express = require("express");
const connectDB = require("./config/db");
const app = express(); // router handler

//init MiddleWare
app.use(express.json({ extened: false })); // body-parser, npm에 이미 설치됨

// MongoDB와 연결
connectDB();

// send json for test
// localhost:5000 으로 접속하면 "Welcome to my world" message가 뜸.
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my world" });
});

// route handling for restaurant
app.use("/api/restaurant", require("./routes/restaurant"));

// PORT NUM
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
