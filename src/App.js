import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Videos from "./Components/Videos/Videos";

export const BlogContext = createContext();

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
