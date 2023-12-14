// db에 데이터를 저장
const mongoose = require("mongoose");
const RestaurantSchema = mongoose.Schema({
  // api 매뉴얼대로 field들을 작성
  연번: {
    type: Number,
  },
  업소명: {
    type: String,
  },
  소재지: {
    type: String,
  },
  업태: {
    type: String,
  },
  주메뉴: {
    type: String,
  },
  기준일자: {
    type: String,
  },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
