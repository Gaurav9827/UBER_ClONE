import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/captainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/home";
import UserPotectedWrapper from "./pages/UserPotectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectedWrapper";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup/>}/>
        <Route path="/home" element={
          <UserPotectedWrapper>
            <Home/>
          </UserPotectedWrapper>
        }/>
        <Route path ="/user/logout" element ={<UserPotectedWrapper>
          <UserLogout/>
        </UserPotectedWrapper>}/>
        <Route path="/captain-home" element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>}/>
    </Routes>
    </div>
  );
};

export default App;
