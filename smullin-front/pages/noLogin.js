import React from "react";
import { Link } from "react-router-dom";
import './noLogin.css';
import logo from '../images/logo.svg';
import search from '../images/search.svg';
import etc from '../images/etc.svg';
import china from '../images/jja.svg';
import meat from '../images/meat.svg';
import noodle from '../images/noodle.svg';
import octopus from '../images/oc.svg';
import rice from '../images/rice.svg';
import soup from '../images/soup.svg';
import steak from '../images/steak.svg';
import japan from '../images/sushi.svg';
import pizza from '../images/pizza.svg';

const Main = () => {
  return (
    <body>
      <div class="upup">
        <Link to="/login" class="login">로그인</Link>
        <Link to="/signin" class="signin">회원가입</Link>
      </div>

      <div class="logoANDsearch">
        <Link to='/'>
          <img src={logo} />
        </Link>

        <div class="search">
          <input class="searchINPUT" type="text" placeholder="검색" />
          <img class="searchIMG" src={search} />
        </div>
      </div>

      <div class="main">
        <div class="category">

          <div class="first">
            <div class="miniCATEGORY">
              <img src={rice} />
              <p class="cateP">밥, 전</p>
            </div>

            <div class="miniCATEGORY">
              <img src={soup} />
              <p class="cateP">찜, 탕, 찌개</p>
            </div>
            <div class="miniCATEGORY">
              <img src={china} />
              <p class="cateP">중식</p>
            </div>
          </div>

          <div class="second">
            <div class="miniCATEGORY">
              <img src={japan} />
              <p class="cateP">회, 일식</p>
            </div>
            <div class="miniCATEGORY">
              <img src={meat} />
              <p class="cateP">고기, 구이</p>
            </div>

            <div class="miniCATEGORY">
              <img src={noodle} />
              <p class="cateP">국수, 면</p>
            </div>
          </div>

          <div class="third">
            <div class="miniCATEGORY">
              <img src={octopus} />
              <p class="cateP">해산물</p>
            </div>

            <div class="miniCATEGORY">
              <img src={steak} />
              <p class="cateP">양식</p>
            </div>

            <div class="miniCATEGORY">
              <img src={etc} />
              <p class="cateP">기타</p>
            </div>

          </div>

        </div>

        <div class="hot">
          <p class="hotPup">11월의 hot 맛집</p>
          <div class="box">
            <img class="pizza" src={pizza} />
            <p class="hotPdown">스파게티가있는풍경</p>
          </div>
        </div>
      </div>
    </body >
  );
};

export default Main;