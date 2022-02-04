import { Routes, Route } from "react-router-dom";

import Header from "./../Components/Global/Header";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import css from "./styles.module.scss";


export default function Page() {
  return (
    <div className={css.Page}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}
