import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog/Blog";
import Blogpage from "./pages/Blog/Blogpage";
//import Newscard from "./pages/News/Newscard";
import Newslist from "./pages/News/Newslist";

//import { Blog, Blogcard } from "../pages"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/:slug" element={<Blogpage />}></Route>
          
          <Route path="/products" element={<Products />}></Route>
          <Route path="/news" element={<Newslist />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
