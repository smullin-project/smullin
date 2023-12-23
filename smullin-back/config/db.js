const mongoose = require("mongoose");
const config = require("config"); // config 라이브러리
const db = config.get("mongoURI"); // mongoURI(몽고DB key)를 끌고 옴

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true, // 파라미터가 몇 가지 더 있지만 이거만 작성해도 문제없음
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);//err.message로 되어 있었음. duream
    process.exit(1);
  }
};

module.exports = connectDB;
