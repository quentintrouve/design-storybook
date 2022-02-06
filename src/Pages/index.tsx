import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "src/Components/Global/Header";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

import css from "./styles.module.scss";

export default function Page() {
  const [userLogged, setUserLogged] = useState<string>("");

  return (
    <div className={css.Page}>
      <Header user={userLogged} setUser={setUserLogged} />
      <Routes>
        <Route path="/" element={<Home user={userLogged} />} />
        <Route path="sign-up" element={<SignUp setUser={setUserLogged} />} />
        <Route path="sign-in" element={<SignIn setUser={setUserLogged} />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}
