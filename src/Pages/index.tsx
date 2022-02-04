import classNames from "classnames/bind";
import { Routes, Route } from "react-router-dom";

import Header from "./../Components/Global/Header";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import css from "./styles.module.scss";
//const cx = classNames.bind(css);

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
}
