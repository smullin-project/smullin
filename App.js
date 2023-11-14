import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import FindID from "./pages/FindID";
import FindPW from "./pages/FindPW";
import SignIn from "./pages/SignIn";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findid" element={<FindID />} />
        <Route path="/findpw" element={<FindPW />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
