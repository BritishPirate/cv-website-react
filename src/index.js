import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contacts";
import NoPage from "./pages/NoPage";
import React from "react";

import "./index.css";

export default function App(){
  return (
      <BrowserRouter>
        <Routes> {/*  */}
          <Route path="/" element={<Layout />}> 
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);