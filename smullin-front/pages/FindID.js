import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './FindID.css';
import logo from '../images/logo.svg';

const FindID = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [sentVerificationCode, setSentVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  const [errormessage, seterrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSendVerificationCode = () => {
    // 이메일로 인증번호 전송 로직을 여기에 구현
    // 여기서는 간단히 무작위 숫자를 생성하여 인증번호로 사용
    const generatedCode = Math.floor(1000 + Math.random() * 9000).toString();
    setSentVerificationCode(generatedCode);

    // 이메일 전송 코드 추가
    // 이 부분에서 서버로 이메일과 인증번호를 전송하고, 서버에서 이메일로 인증번호를 보내는 작업이 필요함
    // 서버에서 이메일 전송 후에는 클라이언트에게 전송된 인증번호를 알려주는 메시지도 반환해야 함
    // 실제 서버와의 통신은 비동기로 이루어져야 하므로 해당 코드는 Promise나 axios 등을 사용하여 작성되어야 함
    // 아래 코드는 간단한 예시일 뿐이며, 실제로는 서버와의 통신이 필요.
    console.log(`인증번호가 이메일(${email})로 전송되었습니다.`);
  };

  const handleVerifyCode = () => {
    //나중에 백이랑 연결한 후에 아이디 불러오기
    if (verificationCode === sentVerificationCode) {
      setMessage('회원님의 아이디는 ~~입니다');
    } else {
      seterrorMessage('! 인증번호가 올바르지 않습니다. 다시 확인해주세요.');
    }
  };

  const handleDone = () => {
    if (verificationCode === sentVerificationCode) {
      navigate('/');
    }
  }

  return (
    <body>
      <Link to='/'>
        <img class="logo" src={logo} />
      </Link>

      <div class="formEMAIL">
        <label>
          이메일
          <input class="inputEMAIL" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button class="buttonEMAIL" type="button" onClick={handleSendVerificationCode}>인증번호 전송</button>
      </div>

      <div class="formNUM">
        <label>
          인증번호
          <input class="inputNUM" type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
        </label>
        <button class="buttonNUM" type="button" onClick={handleVerifyCode}>확인</button>
      </div>

      <p class="error">{errormessage}</p>
      <p class="findIDmessage">{message}</p>

      <button class="done" type="button" onClick={handleDone}>완료</button>
    </body>
  );
};

export default FindID;