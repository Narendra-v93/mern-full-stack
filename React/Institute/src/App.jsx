import React from "react";

import { BrowserRouter, Form, Route, Routes } from "react-router-dom"
import Header from "./component/Header";
import { Toaster } from "react-hot-toast";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header />
        <Routes>
          <Route path="" element={<Registration/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;