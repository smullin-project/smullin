// src/components/Login.js
import React from 'react';

function Login() {
  return (
    <div>
      <h2>로그인</h2>
      <form id="loginForm">
        <label htmlFor="username">아이디:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">비밀번호:</label>
        <input type="password" id="password" name="password" />

        <input type="submit" value="로그인11" />S
      </form>
    </div>
  );
}

export default Login;
