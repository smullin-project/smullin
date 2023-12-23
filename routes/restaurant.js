const express = require("express");
const router = express.Router();

const fetchData = require("../fetchData/fetchData");
const Restaurant = require("../models/Restaurant");

// fetch data
// http://localhost:5000/api/restaurant 로 접속하면 데이터를 받아옴
router.get("/", async (req, res) => {
  try {
    const response = await fetchData();
    console.log(response.data.data);
    res.send(response.data.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

// post data
// mongoDB에 데이터를 저장 => broswer에서는 직접 post할 수 없으므로 postman에서 실행
router.post("/init", async (req, res) => {
  try {
    const response = await fetchData();
    const restaurants = response.data.data;
    Restaurant.collection.insertMany(restaurants); // 만든 모델 스키마의 컬렉션으로 들어가서 불러온 것을 모두 넣기
    console.log("Multiple documents are inserted");
    res.send(response.data.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
