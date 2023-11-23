import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './SignIn.css';
import logo from '../images/logo.svg';

const FindPW = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [id, setID] = useState('');
  const [newPW, setnewPW] = useState('');
  const [PWAgain, setPWAgain] = useState('');
  const [errormessage, seterrorMessage] = useState('');
  const navigate = useNavigate();

  //백이랑 연결한 다음 아이디 이어주기 (중복확인)
  const handleManyID = () => {

  }

  const handleNewPW = () => {
    if (newPW === PWAgain) {
      seterrorMessage('');
    } else {
      seterrorMessage('! 입력한 비밀번호가 서로 다릅니다. 다시 확인해주세요.');
    }
  }

  const handleDone = () => {
    if (newPW === PWAgain) {
      navigate('/');
    }
  }

  return (
    <body>
      <Link to='/'>
        <img class="logoUP" src={logo} />
      </Link>

      <div class="formEMAIL2">
        <label>
          이메일
          <input class="inputEMAIL3" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>

      <div class="formNickname2">
        <label>
          닉네임
          <input class="inputNickname3" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        </label>
      </div>

      <div class="formID2">
        <label>
          아이디
          <input class="inputID3" type="text" value={id} onChange={(e) => setID(e.target.value)} />
        </label>
        <button class="buttonID2" type="button">중복 확인</button>
      </div>

      <div class="formNewPW2">
        <label>
          비밀번호
          <input class="inputNewPW3" type="text" value={newPW} onChange={(e) => setnewPW(e.target.value)} />
        </label>
      </div>

      <div class="formPWAgain2">
        <label>
          비밀번호 확인
          <input class="inputPWAgain3" type="text" value={PWAgain} onChange={(e) => setPWAgain(e.target.value)} />
        </label>
        <button class="buttonPWAgain2" type="button" onClick={handleNewPW}>확인</button>
      </div>

      <p class="error2">{errormessage}</p>

      <button class="done" type="button" onClick={handleDone}>완료</button>
    </body>
  );
};

export default FindPW;