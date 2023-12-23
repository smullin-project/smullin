import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import logo from '../images/logo.svg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  //백이랑 연결하며 다시 수정
  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      // 로그인이 성공하면 '/' 경로로 이동
      setLoginError('');
      navigate('/');
    } else {
      setLoginError('! 비밀번호가 틀렸거나 가입된 정보가 없습니다');
    }
  };

  return (
    <body>
      <Link to='/'>
        <img class="logo" src={logo} />
      </Link>

      <div class="formID">
        <label>
          아이디
          <input class="inputID" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
      </div>

      <div class="formPW">
        <label>
          비밀번호
          <input class="inputPW" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      {loginError && <p class="error">{loginError}</p>}

      <button class="loginBUTTON" type="button" onClick={handleLogin}>
        로그인
      </button>

      <div class="downMENU">
        <Link class="link" to="/findid">아이디 찾기</Link>
        <p class="line">|</p>
        <Link class="link" to="/findpw">비밀번호 찾기</Link>
        <p class="line">|</p>
        <Link class="link" to="/signin">회원가입</Link>
      </div>
    </body >
  );
};

export default Login;