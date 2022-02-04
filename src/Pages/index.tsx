import { Routes, Route } from "react-router-dom";

import Header from "./../Components/Global/Header";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import css from "./styles.module.scss";

<<<<<<< HEAD
=======

>>>>>>> 2656b4e7f499f3fa2a5ceb82fade83ae9fcc793d
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
