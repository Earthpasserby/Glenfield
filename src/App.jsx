// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import Layout from "../Layout";

function App() {
  return (
    <>
      <BrowserRouter basename={"/"}>
        <ScrollToTop>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              {/* <Route path="/service" element={<Service />} /> */}
              {/* <Route path="/about" element={<About />} /> */}
            </Route>
            {/* Add other routes here */}
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
