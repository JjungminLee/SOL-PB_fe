import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Input from "./pages/input";
import Schedule from "./pages/schedule";
import Strategy from "./pages/strategy";
import DepositQuestion from "./pages/depositQuestion";
import InstallmentLoan from "./pages/IntallmentLoan";
import FinalPaymentLoan from "./pages/FinalLoan";
import HomeFinished from "./pages/finish";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/input" element={<Input />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/strategy" element={<Strategy />} />
      <Route path="/deposit-question" element={<DepositQuestion />} />
      <Route path="/installment-loan" element={<InstallmentLoan />} />
      <Route path="/final-loan" element={<FinalPaymentLoan />} />
      <Route path="/finish" element={<HomeFinished />} />
    </Routes>
  );
}
