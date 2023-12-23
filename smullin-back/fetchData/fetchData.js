// axios를 이용한 데이터 불러오기
const axios = require("axios");
const key = require("../config/serviceKey");
const url = require("../config/url");

const fetchData = async () => {
  try {
    return axios.get(url.defaultUrl, {
      // 공공데이터 홈페이지에서 직접 api 명세 확인해서 parameter 확인
      params: {
        serviceKey: key.serviceKey,
        page: "1",
        perPage: "92", // 전체 92개의 지점 존재
        returnType: "JSON",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchData;
